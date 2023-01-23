# Date

Category: Java
Tipo: Clase
Versión: Java 1.0

## **Descripción**

## **Sintaxis**

```java
public class Date extends Object implements Serializable, Cloneable, Comparable<Date>
```

## **Constructores**

- **[Date()](https://www.w3api.com/Java/Date-java-util/Date/)**

## **Métodos**

[Date.parse2()](https://www.notion.so/Date-parse2-5b1c6d3716344796b195ed92580647c2)

[Date.parse()](Date%203729825b159a41739fb7058031c0e6e2/Date%20parse()%206ca3f3c23d00476fa33108d53b67e0d5.md)

- **[after()](https://www.w3api.com/Java/Date-java-util/after)**
- **[before()](https://www.w3api.com/Java/Date-java-util/before)**
- **[clone()](https://www.w3api.com/Java/Date-java-util/clone)**
- **[compareTo()](https://www.w3api.com/Java/Date-java-util/compareTo)**
- **[equals()](https://www.w3api.com/Java/Date-java-util/equals)**
- **[from()](https://www.w3api.com/Java/Date-java-util/from)**
- **[getDate()](https://www.w3api.com/Java/Date-java-util/getDate)**
- **[getDay()](https://www.w3api.com/Java/Date-java-util/getDay)**
- **[getHours()](https://www.w3api.com/Java/Date-java-util/getHours)**
- **[getMinutes()](https://www.w3api.com/Java/Date-java-util/getMinutes)**
- **[getMonth()](https://www.w3api.com/Java/Date-java-util/getMonth)**
- **[getSeconds()](https://www.w3api.com/Java/Date-java-util/getSeconds)**
- **[getTime()](https://www.w3api.com/Java/Date-java-util/getTime)**
- **[getTimezoneOffset()](https://www.w3api.com/Java/Date-java-util/getTimezoneOffset)**
- **[getYear()](https://www.w3api.com/Java/Date-java-util/getYear)**
- **[hashCode()](https://www.w3api.com/Java/Date-java-util/hashCode)**
- **[parse()](https://www.w3api.com/Java/Date-java-util/parse)**
- **[setDate()](https://www.w3api.com/Java/Date-java-util/setDate)**
- **[setHours()](https://www.w3api.com/Java/Date-java-util/setHours)**
- **[setMinutes()](https://www.w3api.com/Java/Date-java-util/setMinutes)**
- **[setMonth()](https://www.w3api.com/Java/Date-java-util/setMonth)**
- **[setSeconds()](https://www.w3api.com/Java/Date-java-util/setSeconds)**
- **[setTime()](https://www.w3api.com/Java/Date-java-util/setTime)**
- **[setYear()](https://www.w3api.com/Java/Date-java-util/setYear)**
- **[toGMTString()](https://www.w3api.com/Java/Date-java-util/toGMTString)**
- **[toInstant()](https://www.w3api.com/Java/Date-java-util/toInstant)**
- **[toLocaleString()](https://www.w3api.com/Java/Date-java-util/toLocaleString)**
- **[toString()](https://www.w3api.com/Java/Date-java-util/toString)**
- **[UTC()](https://www.w3api.com/Java/Date-java-util/UTC)**

## **Ejemplo**

```java
Date d = new Date();
Calendar c = new GregorianCalendar(); 
c.setTime(d);

String dia, mes, annio, hora, minuto, segundo;

dia = Integer.toString(c.get(Calendar.DATE));
mes = Integer.toString(c.get(Calendar.MONTH));
annio = Integer.toString(c.get(Calendar.YEAR));
hora = Integer.toString(c.get(Calendar.HOUR_OF_DAY));
minuto = Integer.toString(c.get(Calendar.MINUTE));
segundo = Integer.toString(c.get(Calendar.SECOND));

System.out.println (hora + ":" + minuto + ":" + segundo + " " + dia + "/" + mes +"/" + annio);
```

## **Líneas de Código**