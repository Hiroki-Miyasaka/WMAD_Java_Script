console.log("it is working!");

// var city1 = "Vancouver";
// var city2 = "Victoria";
// var city3 = "Toronto";

// const cities = ["Vancouver", "Victoria", "Toronto"];

// console.log(cities);
// cities = ["1", "2"];

// console.log(cities.length);

// console.log(cities[0]);

// cities[0] = "Montreal";
// console.log(cities);

// const obj = {
//   firstName: "Mostafa",
//   lastName: "Davoodi",
//   age: 20,
//   courseInfo: {
//     courseName: "JS",
//     courseCredit: 3,
//   },
// };

// const cities = new Array("Vancouver", "Victoria", "Toronto", 20, true, obj);
// console.log(cities);
// let cityAtIndex1 = cities[1];
// console.log(cityAtIndex1);

// document.getElementById("demo").innerHTML = cities;

// console.log(typeof cities);
// console.log(cities.length);

// const cities = ["Vancouver", "Toronto", "Victoria"];
// console.log(cities[cities.length - 1]);

// const cities = ["Vancouver", "Toronto", "Victoria"];
// const newLength = cities.push("Montreal");
// const length = cities.length;

// let unorderList = "<ul>";

// for (let i = 0; i < length; i++) {
//   //   unorderList += "<li>" + cities[i] + "</li>";
//   unorderList += `<li>${cities[i]}</li>`;
// }

// unorderList += "</ul>";

// document.getElementById("demo").innerHTML = unorderList;

const cities = ["Vancouver", "Toronto", "Victoria"];
const myInfo = {
  firstName: "Mostafa",
  lastName: "Davoodi",
  age: 20,
};

console.log(cities[0]);
console.log(myInfo.firstName);

// const cities = ["Vancouver", "Toronto", "Victoria"];

// const citiesStr = cities.toString();

// document.getElementById("demo").innerHTML = cities.toString();

// document.getElementById("demo").innerHTML = cities.join(" <> ");

// cities.push("Montreal");

// console.log(cities.pop());
// console.log(cities.pop());
// console.log(cities);

const cities1 = ["Vancouver", "Toronto"];
const cities2 = ["Victoria", "Montreal"];
const cities3 = ["Burnaby"];

const mergedArray = cities1.concat(cities2, cities3);
console.log(mergedArray);
