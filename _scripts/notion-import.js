const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require('moment');
const path = require('path');
const fs = require('fs');
// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
	// ensure directory exists
	const root = path.join('_posts', 'notion')
	fs.mkdirSync(root, { recursive: true })

	const databaseId = process.env.DATABASE_ID;
	// TODO has_more
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			property: "Publish",
			checkbox: {
				equals: true
			}
		}
	})
	for (const r of response.results) {
		console.log(r)
		const id = r.id
        
        // date
		let date = moment(r.created_time).format("YYYY-MM-DD")
		let pdate = r.properties?.['Date']?.['date']?.['start']
		if (pdate) {
			date = moment(pdate).format('YYYY-MM-DD')
        }
        
		// title
		let title = id
		let ptitle = r.properties?.['Post']?.['title']
		if (ptitle?.length > 0) {
			title = ptitle[0]?.['plain_text']
        }
        
		// tags
		let tags = []
		let pelementos = r.properties?.['Elemento']?.['multi_select']
		for (const t of pelementos) {
			const n = t?.['name']
			if (n) {
				tags.push(n)
			}
        }

        let pversiones = r.properties?.['Versión']?.['multi_select']
		for (const t of pversiones) {
			const n = t?.['name']
			if (n) {
				tags.push(n)
			}
        }

        let ppaquetes = r.properties?.['Paquete']?.['multi_select']
		for (const t of ppaquetes) {
			const n = t?.['name']
			if (n) {
				tags.push(n)
			}
        }

        let pmodulos = r.properties?.['Módulo']?.['multi_select']
		for (const t of pmodulos) {
			const n = t?.['name']
			if (n) {
				tags.push(n)
			}
        }

        let t = '[' + tags.toString() + ']'



        
        // categories
        /*
		let cats = []
		let pcats = r.properties?.['Categories']?.['multi_select']
		for (const t of pcats) {
			const n = t?.['name']
			if (n) {
				tags.push(n)
			}
        }
        */

        // Categoría
       let cat = ''
       let pcats = r.properties?.['Categories']?.['multi_select']
       if (pcats?.length > 0) {
            cat = pcats[0]?.['plain_text']
        }

        let nav = cat.toLowerCase();

        // Permalink
		let permalink = ''
		let ppermalink = r.properties?.['Permalink']?.['title']
		if (ppermalink?.length > 0) {
			permalink = ppermalink[0]?.['plain_text']
        }

        // Key
		let key = ''
		let pkey = r.properties?.['Key']?.['title']
		if (pkey?.length > 0) {
			permalink = pkey[0]?.['plain_text']
        }

		// comments
		const comments = r.properties?.['No Comments']?.['checkbox'] == false
        

        // frontmatter
        /*
        let fmtags = ''
		let fmcats = ''
		if (tags.length > 0) {
			fmtags += '\ntags:\n'
			for (const t of tags) {
				fmtags += '  - ' + t + '\n'
			}
		}
		if (cats.length > 0) {
			fmcats += '\ncategories:\n'
			for (const t of cats) {
				fmcats += '  - ' + t + '\n'
			}
        }
        */
        
const fm = `---
title: ${title}${fmtags}${fmcats}
permalink: ${permalink}
date: ${date}
key: ${key}
category: ${category}
tags: ${t}
sidebar:
  nav: ${nav}
---
`
		const mdblocks = await n2m.pageToMarkdown(id);
		const md = n2m.toMarkdownString(mdblocks);

		//writing to file
		const ftitle = `20210101-${title.replaceAll(' ', '-').toLowerCase()}.md`
		fs.writeFile(path.join(root, ftitle), fm + md, (err) => {
			if (err) {
				console.log(err);
			}
		});
	}
})();