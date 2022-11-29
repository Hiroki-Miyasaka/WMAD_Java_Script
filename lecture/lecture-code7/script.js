// try {
//   // you want to make an api call here
//   showAlert("show alert with this function");
// } catch (error) {
//   // catch api call error
//   console.warn(error);
// } finally {
//   console.log("finally state");
// }

// let age = 11;

// try {
//   if (age < 12) throw "Your age is very low";
//   else if (age < 18) throw "You are not elibible";
//   else {
//     console.log("You are elibile here");
//   }
// } catch (error) {
//   console.error(`You faced with an error: ${error}`);
// } finally {
//   console.log("We checked your state");
// }

// ---------------------------------

// function greetingA() {
//   console.log("Hello world!");
// }

// function greetingB() {
//   console.log("Hello Mostafa");
// }

// greetingB();

// greetingA();

// const numbers = [1, 2, 3, 4, 5, 6];

// function removeGreaterThan5(nums) {
//   const result = [];
//   for (const item of nums) {
//     if (item <= 5) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function removeGreaterThan3(nums) {
//   const result = [];
//   for (const item of nums) {
//     if (item <= 3) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function filterFn(nums, callbackFn) {
//   const result = [];
//   for (const item of nums) {
//     if (callbackFn(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// // const result = removeGreaterThan3(numbers);

// const result3 = filterFn(numbers, (x) => x <= 3);
// const result5 = filterFn(numbers, (x) => x <= 5);
// console.log(result);

// numbers.reduce()

// ---------------------------------

// setTimeout(() => {
//   console.log("just a simple message");
// }, 3000);

// setInterval(() => {
//   const date = new Date();
//   const result =
//     date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//   document.getElementById("demo").innerHTML = result;
//   console.log(result);
// }, 1000);

// let promise = new Promise(function (myResolve, myReject) {
//   // I want to perform a logic in my program

//   // #1: Successfull state
//   myResolve();

//   // #2: Error state
//   myReject();
// });

// promise.then(
//   function (value) {
//     /* everything that you want to do with the successfull state */
//   },
//   function (error) {
//     /* everything that you want to do with the error state */
//   }
// );

let promise = new Promise(function (myResolve, myReject) {
  // I want to perform a logic in my program

  let age = 10;

  if (age > 18) {
    // #1: Successfull state
    myResolve("You are eligible");
  } else {
    // #2: Error state
    myReject("You're not eligible");
  }
});

promise.then(
  function (value) {
    /* everything that you want to do with the successfull state */
    console.log(`the value is: ${value}`);
  },
  function (error) {
    /* everything that you want to do with the error state */
    console.log(`the error is: ${error}`);
  }
);
