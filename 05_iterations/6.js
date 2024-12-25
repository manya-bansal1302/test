//forEach loop does not return any value

/*const coding = ["js", "ruby", "python", "cpp"]

const values = coding.forEach((item) => {
  console.log(item);
})
console.log(values)*/

//filter

//1st syntax
/*const myNums = [1,2,3,4,5,6,7,8,9,10]

 const newNum = myNums.filter( (num) => num > 5 )
 console.log(newNum)*/


 //2nd syntax
 /*const myNums = [1,2,3,4,5,6,7,8,9,10]

 const newNum = myNums.filter((num) => {
  return num > 5;
 })

 console.log(newNum)*/

 const books = [
  {
    title:'Book one' , genre:'fantansy', publish: '1981',
    edition:'2003'
  },
  {
    title:'Book two' , genre:'history', publish: '1982',
    edition:'2004'
  },
  {
    title:'Book three' , genre:'fantansy', publish: '1983',
    edition:'2005'
  },
  {
    title:'Book four' , genre:'fantansy', publish: '1984',
    edition:'2006'
  },
  {
    title:'Book five' , genre:'history', publish: '1985',
    edition:'2007'
  },
  {
    title:'Book six' , genre:'fantansy', publish: '1986',
    edition:'2008'
  },
  {
    title:'Book seven' , genre:'history', publish: '1987',
    edition:'2009'
  }
 ];

 //const userBooks = books.filter( (bk) => bk.genre === 'history')

 //console.log(userBooks)

const userBooks = books.filter ((bk) => bk.publish >= 1982 && bk.genre === "history")
console.log(userBooks)


// in filter only true values are passed 