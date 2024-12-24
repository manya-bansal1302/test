const marvel_Heroes = ["thor", "ironman", "spiderman"]
const dc_Heroes = ["superman", "flash", "batman"]

//marvel_Heroes.push(dc_Heroes)
//console.log(marvel_Heroes)
// console.log(marvel_Hereos[3])
// console.log(marvel_Hereos[3][1])

//const all_Heroes = marvel_Heroes.concat(dc_Heroes)   //concat returns a new array
//console.log(all_Heroes)

const all_new_Heroes = [...marvel_Heroes, ...dc_Heroes]   //spread out (it all give a new array)
//console.log(all_new_Heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(2)
//console.log(real_another_array )

//console.log(Array.isArray("Manya"))
//console.log(Array.from("Manya"))
//console.log(Array.from({name:"manya"})) //we have to tell that we want array of values or keys 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));