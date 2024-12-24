//objects constructor (singletone)
//const tinderUser = new Object()  //singl tone object 
const tinderUser ={}  //output will be empty  non-single tone object


tinderUser.id = "123ac"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 
//console.log(tinderUser) // output will be {}

const regularUser = {
  email:"ome@gmail.com",
  fullname :{
      userfullname:{
        firstname:"Manya",
        lastname:"bansal"
      }
  }
}
//console.log(regularUser)
//console.log(regularUser.fullname.userfullname.firstname)

const object1 = { 1:"a" , 2:"b"}
const object2 = {3:"c" , 4:"d"}
const object4 = {5:"e" , 6:"f"}

//join two object
//const obj3 = Object.assign(object1,object2) (1st way)
//const obj3 = Object.assign({},object1,object2,object4) //{} => represents target (2nd way)

const obj3 = {...object1,...object2,...object4}  //(3rd way and easy way in array also thi is used to add two aur more array)
//console.log(obj3);

//database se aaya hai 
const User = [
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:2,
    email:"g@gmail.com"
  }
]
//console.log(User[1].email)
//console.log(User[0].id)

//console.log(tinderUser)
//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser)); 


const course = {
  courseName : "JavaScript",
  price:"999",
  courseInstructor:"Hitesh"
}

//const {courseInstructor} = course  //syntax to run the code
const {courseInstructor:Instructor} = course  //if you want to change the name
console.log(courseInstructor);