//primitive datatypes (7) call by value
// 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7. BigInt

const id = Symbol('123');
const anotherId = Symbol('123')
console.log( id == anotherId) //false

//non-primitive reference 
//Array, Objects,Functions

const Heros = ["shaktiman", "naagraj", "doga"] //Arrays
 let myObj = {  //Objects
  name: "manya",
  age: 22,
}
const myFunction = function(){ //functions
  console.log("Hello World");
}

// stack(Primitive) heap(Non-Primitive)
