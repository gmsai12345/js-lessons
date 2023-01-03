// // lesson 1
// console.log("hello world");
// // lesson2
// // or put var greet and change inside function
// function greet(name){
//     if(name==="chandler"){
//         var greet = "hello world";
//     }
//     else{
//         var greet = "hi there";

//     }
//     console.log(greet);
// }
// greet("chandle");
// // lesson 3
// var a = 1;
// var b = 2;
// if(a===1)
// {
//     var a = 10;
//     let b = 20;
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(b)
// //  for loops
// for(var i =1;i<=5;i++){
//     setTimeout(function(){console.log(i);},1000)
// } //6 6 6 6 6
// for(let i =1;i<=5;i++){
//     setTimeout(function(){console.log(i);},1000)
// } //5 5 3 2 1
// // set time out means display after particular time
// // const used but cannot be changes the variable
// let num1;
// const num2 = 10;
// const obj1 = {
//     name:"joatmon"
// };
// console.log(obj1.name)
// // calling object
// obj1.name = "chandler";
// console.log(obj1.name);
// // passing as an object we can change const
// //lesson 5 arrow and normal function
// var getRegvalue = function(){
//     return 10;
// } 
// console.log(getRegvalue(/*parameters*/));
// //equivalent to arrow function
// const getarrowvalue = () => {
//    10 
// };
// // syntax arrow
// // const myFunction = (parameters) => {
// //     // function body
// //   };
// // syntax normal
// // function myFunction(parameters) {
//   // function body
// //}
// // diffrences 
// // Arrow functions do not have their own this value. Instead, they inherit the this value from the surrounding scope.
// // Arrow functions do not have a arguments object. If you need to access the arguments passed to a function, you can use the rest operator (...) instead.
// // The return statement is implicit in arrow functions. If the function body is just a single expression, you can omit the curly braces and the return keyword.
// // lesson 6
// var employee = {
//     id:1,
//     greet:function(){
//         var self = this;
//         setTimeout(function(){console.log(self.id)},1000)

//     }
// };
// // this here gets the id in the top 
// employee.greet()
// // lesson 7
// let getValue = function(value){
//     console.log(value)
// }
// getValue(10);
// // this is how function is called
// // lesson 8
// // rest operator
// let display = function(...arguments) {
//   for(let i in arguments){
//     console.log(arguments[i])
//   }
// }
// // this is how we have to print rest operator
// display('red');
// display('red','blue','green');
// // lesson 9
// // spread operator
// let displayc = function(...arguments) {
//     for(let i in arguments){
//       console.log(arguments[i])
//     }
//   }
//   let array = ['orange','yellow','indigo'];
//   displayc(...array)
  // the last 2 steps says array destructuring to elements
// lesson 10
// object literals
// let f = "c";
// let l = "p";
// let person = {
//  f,
//  l
// }
// console.log(person.f,person.l);
// for function
// function create1(f , li){
//     let fu = f + " " li;
//     return {f,l,fu}; 
// }
// let p =  create1("sai","dhakshan");
// console.log(p.f)
// console.log(p.fu)
// console.log(p.l)
// lesson 11
// destructuring the array
// let employee = ["chq","b","m"]
// let [fname,lname,gender] = employee;
//  // fname is chq, lname is b, gender is m
//  console.log(fname)
//  console.log(lname)
//  console.log(gender)
// lesson 12
// destructuring objects
// let employee = {
//   fname:"cc",
//   lname:"sd",
//   gender:'male'
// };
// // we always initialize objects in curly beaces and 
// // then we initialize eaxh of them its name = object name
// // and call it using their name
// let {fname,lname,gender} = employee;
// console.log(fname);
// console.log(lname);
// console.log(gender);
// lesspn 13 string templates
// let user = "saigurudev";
// let sai = `sai ${user} swami`;
// // remember back tics is the only way to put variable while 
// // calling
// console.log(user);
// console.log(sai);
// for loops array lesson 13
// let colors = ["sai","ayyapan","murugan"]
// for(let color in colors){
//   console.log(colors[color]);
// } 
// // can also be done like 
// for(let color of colors){
//   console.log(colors);
// } 
// lesson 14 class
// type of both class and functional component are both 
// function type
// class Person{

// }
// // the down is the way how you call a function
// let p = new Person();
// function employee(){}
// // this the way you call function
// employee();
// classes can have method inside them
// which is like a function inside them
// lesson 15 class and subclass and how do they extend it
// class MyClass { // for class it is nesscessary to give parameter inside the class
//   //  then put this.parameter = parameter 
//   //In the context of a class constructor function, 
//   //this.name = name means that the name property of 
//   //the current object (which is being constructed
//   // by the class) is being set to the value of the 
//   //name argument that was passed to the constructor 
//   //function.
//   constructor(name) {
//     this.name = name;
//   }
// // sayname is a method inside the class it is also like a function
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
// }
// // subclass also works the same way
// // to call the construcor function of super class
// class SubClass extends MyClass {
//   constructor(name) {
//     super(name); // call the superclass's constructor function
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// // Create an instance of MyClass
// const myObj = new MyClass('John');
// myObj.sayName(); // outputs "My name is John"

// // Create an instance of SubClass
// const subObj = new SubClass('Jane');
// subObj.sayName(); // outputs "My name is Jane"
// subObj.sayHello(); // outputs "Hello, my name is Jane"
// lesson 16
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }
// // class dog extends animal means that dog is main class
// // and it inherits all the properties of the animal class
// // in main class only there is super() function
// class Dog extends Animal {
//   constructor(name) {
//     super(name); // call the superclass's constructor function
//   }

//   bark() {
//     console.log(`${this.name} barks.`);
//   }
// }
// // it is enough to call th dog function with submethods of 
// // the subclass because of inheritance
// const dog = new Dog('Fido');
// dog.speak(); // outputs "Fido makes a noise."
// dog.bark(); // outputs "Fido barks."
// lesson 17
// if you only want to export the variable to another class
// export the varaible 
// export let fname = "chandler";
// // the import it another module
// import {fname} from "./lesson1.ts";
