// // Cannot read properties of undefined (reading 'push') in JS

// // EXAMPLE 1 - Make sure to initialize the variable

// let arr = [];

// arr.push('bobby');
// arr.push('hadz');
// arr.push('com');

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Only call the `push()` method on arrays

// const arr = [];

// arr.push('a');
// arr.push('b');
// arr.push('c');

// console.log(arr); // 👉️ [ 'a', 'b', 'c' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Initialize array properties to empty arrays instead of leaving them undefined

// const employees = [
//   {id: 1, name: 'Alice', tasks: []},
//   {id: 2, name: 'Bob', tasks: []},
// ];

// employees[1].tasks.push('buy groceries');

// // [
// //   { id: 1, name: 'Alice', tasks: [] },
// //   { id: 2, name: 'Bob', tasks: [ 'buy groceries' ] }
// // ]
// console.log(employees);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Initialize the variable to an empty array

// const fromDb = undefined;

// const arr = fromDb || [];

// arr.push('abc');
// console.log(arr); // 👉️ [ 'abc' ]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if the variable stores an array before calling `push()`

// const arr = undefined;

// // ✅ using Array.isArray
// if (Array.isArray(arr)) {
//   arr.push('example');
// } else {
//   console.log('arr variable does not store an array');
// }

// ------------------------------------------------------------------

// // EXAMPLE 6 - Checking if the variable doesn't store an array to initialize it

// let arr = undefined;

// if (!Array.isArray(arr)) {
//   arr = [];

//   arr.push('example');
// } else {
//   console.log('arr variable does not store an array');
// }

// console.log(arr); // 👉️ [ 'example' ]

// ------------------------------------------------------------------

// // EXAMPLE 7 - Forgetting to initialize a class property before calling `push()`

// class Person {
//   // ✅️ Initialize class property setting it to array
//   languages = [];

//   constructor(colors) {
//     // ✅ initialize from passed in parameters
//     this.colors = colors;
//   }

//   addLanguage(language) {
//     this.languages.push(language);
//   }

//   addColor(color) {
//     this.colors.push(color);
//   }
// }

// const p1 = new Person(['blue', 'red']);

// p1.addLanguage('spanish');
// p1.addColor('green');
