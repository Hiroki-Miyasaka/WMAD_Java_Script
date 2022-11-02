// console.log("Hello world");
// console.info("");
// console.error("");
// console.warn("");

// innerHTML
// document.write()
// window.alert()
// console

// document.getElementById("demo").innerHTML = "Hello world";

// document.write("<h1>Mostafa is here</h1>");

// window.alert("Here is a sample alert");

// console.info("here is some information");
// console.warn("here is a warning");
// console.error("here is an error");
// console.warn("here is a warning");

// var name = "mostafa";

// reserved keywords
// var, let, const, if, switch, for, function, return, try

// number, boolean, string

// var, let, const
// var name = "Mostafa";
// let name = "Mostafa";
// const name = "Mostafa";

// +, -, *, /, =
// var a = 1;
// var b = 2;
// console.log(a + b);

// it's better to use camelCase format for your variable names
// var firstName = "John";
// var lastName = "Doe";
// console.log(firstName + " " + lastName); // here is the concatenation example

// var, let, const
// 2015
// const x = 1;
// x = 2;

// let city;
// console.log(city);
// if (city == undefined) {
//   console.info("there is no value here");
// } else {
//   console.info("the value is here");
// }

// var city = "Vancouver";

// {
//   let city = "Vancouver";
//   // let city = "Vancouver";
// }

// console.log(city);

// +, -, *, **, /, %, ++, --
// let x = 2 ** 3;
// let x = 1;
// x++; // x = x + 1; x += 1;
// x--; // x = x - 1; x -= 1;
// console.log(x);

// x += y; x = x + y;
// x -= y; x = x - y;
// x *= y; x = x * y;

// let firstName = "John";
// firstName += " Doe"; // firstName = firstName + " Doe";
// console.log(firstName);

// const cities = ["Vancouver", "Toronto", "Montreal"];
// const numbers = [1, 2, 3];
// console.log(cities);
// console.log(numbers);

// const x = "1";

// console.log(typeof x);

// function greetingMessage(firstName, lastName) {
//   console.log(firstName);
//   console.log(lastName);
// }

// function add(a, b) {
//   // let, const
//   return a + b;
// }

// greetingMessage("John", "Doe");
// console.log(add(1, 3));

// let carName = "Audi";
// let carModel = "2015";
// let carColor = "Red";

// const car = {
//   name: "Audi",
//   model: "2015",
//   color: "Red",
// };

// // console.log(typeof car);
// console.log(car);

// const person = {
//   firstName: "Mostafa",
//   lastName: "Davoodi",
//   car: {
//     name: "Audi",
//     model: "2015",
//     color: "Red",
//   },
//   courses: ["JS", "HTML", "CSS"],
//   age: 20,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.firstName);
// console.log(person.car.name);
// console.log(person.courses);
// console.log(person.fullName());

function displayDate() {
  //   document.getElementById("demo").innerHTML = Date();
  //   window.alert("the date is something!");
  const dateInformation = Date();
  window.alert(`The date is: ${dateInformation}`);
}

function normalText() {
  document.getElementById("demo").innerHTML = "Dummy text!";
}
