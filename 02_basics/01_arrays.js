//arrays
const myArr = [0,1,2,3,4,5] //in javascript array are resizeable and mix of datatypes
//const myHereos = ["saktiman" , "nagraaj"] //create shallow copies(properties share same reference(heap))
//const myArr2 = new Array(1,2,3,4)
//console.log(myArr);
//console.log(myArr[2]);

//Array Methods

// myArr.push(6) 
// console.log(myArr)
// myArr.pop()


//myArr.unshift(0)  //time consuming operation
//myArr.shift()  //it shifts the value by one from front

//console.log(myArr.includes(9)); //false
//console.log(myArr.indexOf(9));  //-1 (because it does not exist)
//console.log(myArr.indexOf(3));  //3 (because index exists)

//const newArr = myArr.join()       //.join (add all the element of array into string)
// console.log(newArr)
// console.log(typeof newArr)
//console.log(myArr);

//slice ,splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2)
//The main difference is that slice() creates a new array with a portion of elements copied from the original array,
// while splice() mutates the original array itself by removing, replacing or adding elements to it.