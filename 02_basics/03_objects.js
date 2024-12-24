//constructor se single tone banega literal se nhi banega

//abjects literals
//ek symbol lo aur uslo abject ki keys mein add karo aur print karke dikha do)
const mySym = Symbol("key1")

const jsUser = {
  name:"Manya",
  age: 18,
  [mySym]: "myKey1", //synatx of Symbol
  location:"Rampura",
  email:"manyabansal@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["Monday","Tuesday"]
}

//console.log(jsUser.age)  //this is a wrong way 
//console.log(jsUser[email])  //this will show email is not defined
//console.log(jsUser["email"])
//console.log(jsUser[mySym])

jsUser.email = "manyabansal@chatgpt.com" // to change the value
//console.log(jsUser["email"])
//Object.freeze(jsUser)  //after that if you do any cahnge it will not change
jsUser.email = "manyabansal@microsoft.com"
//console.log(jsUser)

jsUser.greeting = function(){
  console.log("Hello Js User")
}
//console.log(jsUser.greeting) //function does not execute but only reference has come
//console.log(jsUser.greeting()) //this will work 

jsUser.greeting2 = function(){  //name ko reference karna hai 
  console.log(`Hello Js User, ${this.name}`)
}
console.log(jsUser.greeting2())