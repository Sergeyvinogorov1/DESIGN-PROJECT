const parser = new DOMParser();

const xmlString =
`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const xmlDom = parser.parseFromString(xmlString, "text/html")

const listNode = xmlDom.querySelector("list")
const langNode = listNode.querySelector("student name") // выбор элемента <name>
const nameNode = langNode.querySelector('first') // выбор элемента <first> внутри <name>
const surnameNode = langNode.querySelector('second') // выбор элемента <second> внутри <name>
const ageNode = listNode.querySelector("age")
const profNode = listNode.querySelector("prof")

const firstName = nameNode.textContent.trim();
const lastName = surnameNode.textContent.trim();

const langAttr = langNode.getAttribute("lang")

const result = {
    name: `${firstName} ${lastName}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
}

console.log("result", result)


const jsonString =`
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
   `

   const data = JSON.parse(jsonString);

   const list = data.list;

   const result2 = list.map(item => ({
    name: item.name,
    age: item.age,
    prof: item.prof
   }))

   console.log("result2", result2)
