const myObject = {
  js: "javascript",
  cpp : "c++",
  rb : "ruby",
  swift : "swift by apple"
}

//for in loop  (for objects but not only for objects)


//syntax
/*for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}*/

for(const key in myObject){
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "ruby", "python"]

for(const key in programming){
console.log(programming[key])

}