// var is the original keyword
// let, const 2015

// var cities = ["Vancouver", "Toronto", "Victoria"];
// console.log(cities);
// cities.sort();
// console.log(cities);

// cities.reverse();
// console.log(cities);

// function ascendingOrder(a, b) {
//   return a - b;
// }

// function desendingOrder(a, b) {
//   return b - a;
// }

// const numbers = [1, 3, 2, 10, 4];
// console.log("Initial value:", numbers);

// #1
// numbers.sort(desendingOrder);

// #2
// numbers.sort(function (a, b) {
//   return a - b;
// });

// console.log("Sorted value:", numbers);

// random generator function in JS
// console.log(Math.random());

// const numbers = [1, 3, 2, 10, 4];
// const max = Math.min(1, 2, 3, 4);
// console.log(max);

// function maxValue(numbers) {
//   let max = -Infinity;
//   for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] > max) {
//       max = numbers[index];
//     }
//   }
//   return max;
// }

// function minValue(numbers) {
//   let min = Infinity;
//   for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] < min) {
//       min = numbers[index];
//     }
//   }
//   return min;
// }

// var bcInfo = {
//   name: "British Columbia",
//   population: 1_000_000,
//   capital: "Victoria",
// };

// var ontarioInfo = {
//   name: "Ontario",
//   population: 2_000_000,
//   capital: "Ottawa",
// };

// var canadaStates = [bcInfo, ontarioInfo];

// canadaStates.sort(function (a, b) {
//   return b.population - a.population;
// });

// for (let index = 0; index < canadaStates.length; index++) {
//   console.log("name: ", canadaStates[index].name);
//   console.log("population: ", canadaStates[index].population);
//   console.log("capital: ", canadaStates[index].capital);
//   console.log("-------------");
// }

// const numbers = [1, 2, 3];

// for (let index = 0; index < cities.length; index++) {
//   console.log(cities[index]);
// }

// function print(value, index, content) {
//   console.log("value muliply by 2 is: ", value * 2);
//   console.log("index is: ", index);
//   console.log("content is: ", content);
// }

// numbers.forEach(print);

// function multiplication(value, index, content) {
//   return value * 2;
// }

// const updatedNumbers = numbers.map(multiplication);
// console.log("numbers is: ", numbers);
// console.log("updated numbers is: ", updatedNumbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function greaterThan5(value, index, content) {
  return value > 5;
}

const over5 = numbers.filter(greaterThan5);
console.log("Original values is: ", numbers);
console.log("Over 5 values is: ", over5);
