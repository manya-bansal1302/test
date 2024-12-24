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
//console.log(loginUserMessage("Manya"))

//function  calculateCartPrice(...num1){ ///...rest Operator(multiple values kaise pass hoti hai)
 // return num1
//}
//console.log(calculateCartPrice(200,400,500))

function  calculateCartPrice(val1,val2,...num1){ 
  return num1
}
//console.log(calculateCartPrice(200,400,500))


const user = {
  username:"manya",
  price:199
}

function handleObject(anyObject){
  //console.log(`Username is ${anyObject.username} and price is  ${anyObject.price} `);

}
//handleObject(user)
handleObject({
  username: "sam",
  price: 199
})


const NewArray = [200,400,100,600]

function returnSecondArray(getArray){
  return getArray[1]
}

//way to call a function
console.log(returnSecondArray(NewArray))
console.log(returnSecondArray([200,400,500,1000]))