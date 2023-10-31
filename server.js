/** @format */
//  length
// console.log(fruits.length); 5

//  toString()
// console.log(typeof fruits); object;
// console.log(fruits.toString()); Banana, Orange, Apple, Mango, Banana;
// console.log(typeof fruits.toString()); string;

//  shift()
// fruits.shift();
// console.log(fruits); ["Orange", "Apple", "Mango"];

//  pop()
// fruits.pop();
// console.log(fruits); ["Banana", "Orange", "Apple"];

//  unshift()
// fruits.unshift("Kiwi");
// console.log(fruits); ["Kiwi", "Banana", "Orange", "Apple", "Mango"];

//  push()
// fruits.push("kiwi", "mango");
// console.log(fruits); ["Banana", "Orange", "Apple", "Mango", "kiwi", "mango"];

//  join()
// const res = fruits.join(",");
// console.log(res) Banana,Orange,Apple,Mango
// console.log(typeof res); string

//  concat()
// const fruits = ["Banana", "Orange"];
// const a = ["Apple", "Mango"];
// console.log(fruits.concat(a)); ["Banana", "Orange", "Apple", "Mango"];

//  slice()

//  splice(index,delete count,insertion value)
// fruits.splice(0, 0, "kiwi", "xyz"); ["kiwi", "xyz", "Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "kiwi"); ["Banana", "Orange", "kiwi", "Apple", "Mango"];
// fruits.splice(2, 1); ["Banana", "Orange", "Mango"];
// console.log(fruits);

//  sort()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);["Apple", "Banana", "Mango", "Orange"];

//  reverse()
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.reverse();
// console.log(fruits); ["Orange", "Mango", "Banana", "Apple"];

//  includes()
//  delete()
// fill()
//  flat()
// const arr = [10, "teja", "mango", ["varun", true, [4, 5, 6]]];
// Spread operator

// Iteration Array methods
// -----------------------
// Map()
// filter()
// find()
