// regular function 
 /* let greeting = function () {
    return "hello world";
};
let message = greeting();
console.log(message); */

// arrow function
/*let greetings = () => {
     return'hello world';
};
let messages = greetings();
console.log(messages); */


// arrow function in simplest way (here there is no need to write return)
/*let greetings = () => 'hello world';
let message = greetings();
console.log(message);*/

// function with one parameter
/* let greet = function greetings(name) {
    return 'hello  ' + name;
};
 let message = greet('jyoti');
 console.log(message);  */
  let greet = name => 'hello ' + name;
  let message = greet('jyoti');
  let message1 = greet('deepak');
  console.log(message); 
  console.log(message1); 