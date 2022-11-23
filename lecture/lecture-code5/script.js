// console.log("lecture code");

// const cities = ["Vancouver", "Toronto", "Victoria"];
// const numbers = [1, 2, 3];

// // filter, foreach, map

// const updatedNumbers = numbers.map(mulitplyBy2);

// // the classical way of creating function
// function mulitplyBy2(value, index, array) {
//   return value * 2;
// }

// console.log(updatedNumbers);

// // JS arrow function introduced in ES6
// // let plusFunction = (a, b) => a + b;

// let classicPlusFunction = function (a, b) {
//   return a + b;
// };

// let arrowPlusFunction = (a, b) => {
//   return a + b;
// };

// let shorterVersionOfArrowPlusFunction = (a, b) => a + b;

// console.log(shorterVersionOfArrowPlusFunction(1, 3));

// const updatedNumbersWithArrowFunction = numbers.map((value, index, array) => {
//   return value * 2;
// });

// console.log(updatedNumbersWithArrowFunction);

// const greetintMessage = (name) => `Hi ${name}, Welcome to the JS course`;
// console.log(greetintMessage("Mostafa"));

// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.filter((value, index, array) => {
//   return value > 2;
// });

// console.log(filteredNumbers);

// numbers.forEach((value, index, array) => {
//   console.log(`at index ${index} we have value: ${value}`);
// });

// const numbers = [1, 2, 3, 4];
// const cities = ["Vancouver", "Toronto", "Victoria"];

// let sum = numbers.reduce(sumFunc);

// let result = cities.reduce(concatFunc);

// function sumFunc(total, value, index, array) {
//   return total * value;
// }

// function concatFunc(total, value, index, array) {
//   return total + "*" + value;
// }

// let result = cities.reduceRight((total, value, index, array) => {
//   return total + " => " + value;
// });

// console.log(result);

// const result = numbers.every((value, index, array) => {
//   value > 0;
// });

// console.log(result);

// let position = cities.indexOf("Toronto");
// console.log(position);

// const cities = ["Vancouver", "Toronto", "Victoria"];
// // cities = ["California", "New York"];
// cities[0] = "New York";
// console.log(cities);

// const date = new Date();
// const date = new Date("2022-01-02");
// const date = new Date(2018);

// console.log(date.toDateString());

// console.log(Math.PI);
// console.log(Math.round(1.6));
// console.log(Math.ceil(1.6));
// console.log(Math.trunc(1.6));
// console.log(Math.sign(-1.6));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(4));
// console.log(Math.abs(-4));

// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));

// console.log(Math.random());

// const age = 12;
// if (age > 18) {
// } else if (age > 12) {
// } else {
// }

// const age = 12;

// switch (age) {
//   case 12:
//     console.log("your age is 12");
//     break;

//   case 13:
//     console.log("your age is 13");
//     break;

//   default:
//     break;
// }

// let array = [1, 2, 3, 4, 5];

// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// const letters = new Set();
// const letters = new Set(["a", "b", "c"]);

// letters.add("d");

// letters.forEach((value) => {
//   console.log(value);
// });


