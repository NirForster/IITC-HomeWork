// Answer 1)

// option 1 - set array:
// let arr = [11, 5, 6, 2, 6, 16];

// option 2 - get array from user:
// let arr = [];
// for (let j = 0; j < 5; j++) {
//   arr[j] = prompt("enter a number");
// }
// console.log(arr);

// // define min as the first number in the array:
// let min = arr[0];

// function findMin() {
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (num < min) {
//       min = num;
//     }
//   }
//   console.log(min);
// }

// findMin(arr);
// alert("min number in array is: " + min);

// Answer 2)
// get array from user:
// let arr = [];
// for (let j = 0; j < 5; j++) {
//   arr[j] = prompt("enter a number");
// }
// console.log(arr);
// // define max and index of max in array:
// let max = 0;
// let index = 0;

// function findMax() {
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (max < num) {
//       max = num;
//       index = i;
//     }
//   }
//   console.log(max);
// }
// findMax(arr);
// alert(
//   "max number in array is: " +
//     max +
//     "\n index of maximum num is: " +
//     index
// );

// Answer 3)
// let first = [0,1,2];
// let second = [0,1,2];
// let third = [0,1,2];
// let arr = [first, second, third];

// function arraySum() {
//   let sum = 0;

//   for (let j = 0; j < arr.length; j++) {
//     for (let k = 0; k < arr[j].length; k++) {
//       arr[j][k] = parseInt(prompt("Enter a number for array"));
//       sum += arr[j][k];
//     }
//   }
//   console.log(arr);
//   console.log("Sum is: " + sum);
//   alert("Sum is: " + sum);
// }

// arraySum();

// Answer 4)
