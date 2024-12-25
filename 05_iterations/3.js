//for of loop

/* ["", "", ""]  strings in array
[{}, {}, {}]  object in array */


//syntax
/*const arr = [1,2,3,4,5]
for (const iterator of object) {
  
} */

/*const arr = [1,2,3,4,5]
for(const num of arr){
  console.log(num);
}*/

/*const greetings = "Hello World!"
for(const greet of greetings){
  console.log(`Each char is ${greet}`);
}*/


//Maps (hold key value pairs) (are for unique values)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

//console.log(map);

for(const [key,value] of map){  // this is a syntax so that key and value will be printed sperately
 // console.log(key, ':-', value);
}

const myObject =  {
  'Game1' : 'NFS',
  'Game2' : 'Spiderman'
}

for (const [key,value] of myObject){   //it does not work for object
  console.log(key,':-',value)

}