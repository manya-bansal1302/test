//joh bahar likhe ge voh hai global scope 
// aur jo loops ke andhar , functions ke andhar , if/else ke andhar likhe ge voh hai block scope

let a = 300
if(true){
  let a = 30
  const b = 20
  //console.log("Inner: ", a)
}
//console.log(a)    //phele loop ke andhar vali value print hogi fir loop ke bahar vali

function one(){
  const username = "Manya"

  function two(){
    const website = "youtube"
    //console.log(username)
  }
  //console.log(website) //this will show error
  
  //two()
}

one()

if(true){
  const username = "manya"
  if(username === "manya"){
    const website = " youtube"
    //console.log(username + website)  //only this will be printed
  }
  //console.log(website) //this will show error
}

//console.log(username) //this will also shoe error


