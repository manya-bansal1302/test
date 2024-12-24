const name = "manya"
const repoCount = 3

//console.log(name + repoCount + "value");

console.log(`my name is ${name } and my repCount is ${repoCount}`)

//way to define string
const gameName = new String ('manyaba')

//console.log(gameName[0]);

//console.log(gameName.length)
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
//console.log(newString)

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString)

const newStringOne = "   hitesh    "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const newString2 = "ManyaBansal"
console.log(newString2.replace('a', 't'))

//console.log(newString2.includes('manya')) //false
//console.log(newString2.includes('Manya')) //true
console.log(newString2.split('a')) 
