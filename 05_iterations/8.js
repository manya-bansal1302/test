//reduce 

const myNums = [1,2,3,4]

 /*let myTotal =myNums.reduce(function (accumulator,currValue) {
  console.log(`acc: ${accumulator} and currValue: ${currValue}`)
  return accumulator + currValue
 }, 0)*/


 const myTotal = myNums.reduce( (acc,currValue) => (acc+currValue),0) 
 console.log(myTotal)