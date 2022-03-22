import {pipe, compose} from "lodash/fp";
import {Map} from "immutable";
import { produce } from "immer";

// Redux is a functional Programming, where we take problems to be solved by smaller functions;
function sayHello() {
  return "Hello World";
}

// Reference to sayHello function, function is like object in JS
let fn = sayHello;
fn();

/////////////////////////////////////////
// Example of Higher Order Function
// Takes Function as an argument or returns a function, or both. 
function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello);

/////////////////////////////////////////
// Example of Higher Order Function
function sayWorld() {
  return function() {
    return "Hello World";
  }
}

let fn = sayWorld();

// Example of not Functional Programming
let input = " JavaScript ";
let output = "<div>" + input.trim() + "</div>";

// Example of a Functional Programming
const trim = str => str.trim();
const div = function(type) {
  return function(str) {
    `<${type}>${str}</${type}>`;
  }
}
const toLowerCase = str => str.toLowerCase();

const result = div(toLowerCase(trim(input)));

// To prevent a lot of nested functions, use Compose or pipe in lodash
// Lodash is a utility library for JS
const transform = compose(div, toLowerCase, trim);
const transformPipe = pipe(trim, toLowerCase, div);

// Currying, a step to return a function so you doesn't have to add 2 parameters
// Example of Currying  

function add(a) {
  return function(b) {
      return a + b}
}

const add = a => b => a + b;

add(1)(5)

// Pure Functions => When a function always return the same result
// Pure Functions => no random values, no current date/time, no Global State(window), no mutation of parameters
// Immutability => when state or variables don't change

const obj = {name : "vito"}
const upd = {...obj, name: "widigdo"}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Spread operator only does shallow copy, so you have to do a deep copy for an object inside an object

const obj = {
  name : "vito",
  address: {
    zip: 10720,
    country: "Indonesia"
  }
}

const upd = {
  ...obj,
  name: "widigdo",
  address: {
    ...obj.address,
    country: "Malaysia"
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const number = [1,2,3];

// Add Number before 2
const index = number.indexOf(2);
const added = [
  ...number.slice(0, index),
  4,
  ...number.slice(index),
]

// Removing number 2
const remove = number.filter(n => n!==2);

//Updating
const updating = number.map(n => n===2 ? 20 : n);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let book = Map({title : "Transformer"})

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.get("title"))
console.log(book.toJS())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let book = { title : "Transformer" }

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}

let produceUpdate = publish(book);

console.log(produceUpdate);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Store Subcribe is so you get notified when store is changing in redux
// This is for rerender in your App
// Also needs to unsubscribe

// store.subsribe(() => {
//   console.log("Store Changed!", store.getState())
// })

// const unsubscribe = store.subsribe(() => {
//   console.log("Store Changed!", store.getState())
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In Redux, When we dispatch an action, our store will call reducer, that will effect the initialState of the data according to the action.

// In modern javascript, if the name of property and value is the same, we can use shorthand syntax, ex:
// export const resolved = id => ({
//   payload: {
//     id,
//     description
//   }
// })