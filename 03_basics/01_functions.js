function sayMyName(){
  console.log("H"),
  console.log("G"),
  console.log("J"),
  console.log("K"),
  console.log("L")
}
//sayMyName()

//function sumTwoNumber(number1,number2){  //these are parameters 
  //console.log(number1+number2);
//}
//sumTwoNumber(4,5)  //these are arguments

function addTwoNumber(number1,number2){  //these are parameters  
    let result = number1 + number2
    //console.log("Hitesh")
    return result   //in functions result ke baad kuch print hota 
}
const result = addTwoNumber(3,5)
//console.log("Result:",result)

function loginUserMessage(username){
  return `${username} just logged in `
}
console.log(loginUserMessage("Manya"))
