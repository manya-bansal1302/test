// for loop

//syntax
/*for (let index = 0; index < array.length ; index++){
  const element = array[index];
}*/

/*for (let i= 0; i< 10; i++){
  const element = i;
  if(i==5){
    console.log("5 is best number");
  }
  console.log(element);
}*/

/*for (let i = 0; i <= 10; i++) {
  console.log(`outer loop value ${i}`)
  for (let j = 0; j <= 10; j++) {
    //console.log(`inner loop value ${j} and inner loop value ${i}`)
    console.log(i + '*' + j + ' = ' + i*j)
  }
  
} */

const myArray = ["flash", "batman","superman"]
console.log(myArray.length)
 for (let index = 0; index < myArray.length; index++) {
  const element =myArray[index];
  console.log(element)
 }

 //break and continue
 /*for (let index = 1; index <= 20; index++) {
  if(index == 5){
    console.log(`Detected 5`)
    break;
  }
       console.log(`Value of i in ${index}`);
  
 }*/
 let index ;
 for (index = 1; index <= 20; index++) {
  if(index == 5){
    console.log(`Detected 5`)
    continue
  }
       console.log(`Value of i in ${index}`);
  
 }