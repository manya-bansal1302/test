const userEmail = ""

/*if(userEmail){
  console.log("Got user Email")
}else{
  console.log("not got user email")
}*/

/* falsey values 
false , 0 , -0 , BigInt 0n, emptyString("") , null , undefined , Nan */
/* truthey values
"0" , 'false' , " " , [] , {} , function(){}(empty function) */

/*if(userEmail.length === 0){
  console.log("array is empty")
}else{
  console.log("array is not empty")
}*/

const emptyObjects = {}

/*if(Object.keys(emptyObjects).length === 0){
  console.log("object is empty")
}else{
  console.log("object is not empty")
}*/

/* Nullish Coalesing Opreator (??) : null/undefined*/

let val1;
//val1= 5 ?? 10 //output is 5
//val1 = null ?? undefined //output is undefined
//val1 = null ?? 10 //output is 10
//val1 =  undefined ?? 15 //output is 15

//console.log(val1)  

//Terniary Operator

// syntax 
//condition ? true : false

const iceTea = 100

iceTea <= 80 ? console.log("less than 80 ") : console.log("more than 80")