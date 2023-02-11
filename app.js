function greet(){
    console.log("Hello");

}

greet(); //invoca la funcion

//function as parameters
function logGreeting(fn){
    fn();
}

logGreeting(greet);

//function expression
let greetMe = function(){
    console.log("Hello from the function expression");
}

greetMe();

logGreeting(greetMe);
//functions are first class, pass it as a parameter

//refactor funcion greet()

let greet1  = () => {
    console.log("Hello");
}

greet1();

let greet2 = () => console.log("Hello");

greet2();

//refactor funcion logGretting()

let logGreeting1 = fn => {
    fn();
}

logGreeting1(greet);

let logGreeting2 = fn => fn();

logGreeting2(greet);

//refactor funcion greetMe()

let greetMe1 = () => {
    console.log("Hello from the function expression");
}

greetMe1();

logGreeting1(greetMe1);

let greetMe2 = () => console.log("Hello from the function expression");
greetMe2();

logGreeting2(greetMe2);