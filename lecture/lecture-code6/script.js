// const letters = new Set(["a", "b", "c"]);
// letters.add("d");
// letters.delete("a");
// console.log(letters.has("z"));

// letters.forEach((value) => {
//   console.log(value);
// });

// console.log(letters.values());

// for (const letter of letters.values()) {
//   console.log(letter);
// }

// const cities = ["Vancouver", "Toronto", "Montreal"];
// for (let index = 0; index < cities.length; index++) {
//   console.log(cities[index]);
// }

// let info = {
//   firstName: "Mostafa",
//   lastName: "Davoodi",
//   city: "Vancouver",
// };

// for (let property in info) {
//   console.log(
//     `property name is: ${property} and the value is: ${info[property]}`
//   );
// }

// const cities = ["Vancouver", "Toronto", "Montreal"];
// for (let index in cities) {
//   console.log(`index is: ${index} and the value is: ${cities[index]}`);
// }

// const cities = ["Vancouver", "Toronto", "Montreal"];
// for (let city of cities) {
//   console.log(city);
// }

// const message = "Hello World!";

// for (let char of message) {
//   console.log(char);
// }

// const population = new Map([
//   ["Vancouver", 2_000_000],
//   ["Toronto", 5_000_000],
// ]);

// population.set("Montreal", 3_000_000);
// console.log(population.get("Vancouver"));
// console.log(population.size);

// function greeting() {
//   console.log("Welcome to our lecture!");
// }

// const message = "Hello World!";
// console.log(typeof greeting);

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   printInfo(city) {
//     console.log(`my name is: ${this.firstName} and city is: ${city}`);
//   }
// }

// let john = new Student("John", "Doe");
// john.printInfo("Vancouver");

import { baseURL, greetingMessage } from "./info.js";
console.log(baseURL);
greetingMessage("Mostafa", "Davoodi");

// import url from ".info.js";
