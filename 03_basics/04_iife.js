//Immediately Invoked Function Expression (IIFE)

(function chai(){   //syntax
  console.log(`DB CONNECTED`)
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);

})('manya')
