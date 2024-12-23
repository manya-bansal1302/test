const accountId = 144553. //can't be change 
let accountEmail = "manya@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; //undefined will be the output
// accountId = 2 not allowed

accountEmail = "manyabansal@google.com"
accountPassword  = "21121"
accountCity = "Pune"

/* not to use var because issue in block and functional scope*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
