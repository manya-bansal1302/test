//syntax
/*switch (key){
  case value:

    break;

    default:
      break;
}*/

const month = 3
switch (month){
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("febuary");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;

  default:
    console.log("Default");
    break;     //agar 3 mein koi break naa hota toh yeh uske baad ka sab kuch print karteh expect default
}