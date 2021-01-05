'use strict';

// Функции

// 1

// ET 2
// AT 3

// let max = (a, b) => {
// 	if (a > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// console.log(max(0, -1));

// 2

// ET 20
// AT 30

// function min(...rest) {
// 	let result = Infinity;

// 	for (var i = 0; i < rest.length; i++) {
// 		if (rest[i] < result) {
// 			result = rest[i];
// 		}
// 	}

// 	return result;
// }

// console.log(min(0, -1, 100, 500, 100500));

// 3

// ET 20
// AT 40

// let users = [
// 	{firstName: 'John', lastName: 'Snow', age: 16},
// 	{firstName: 'Eddart', lastName: 'Stark', age: 30},
// 	{firstName: 'Keytlin', lastName: 'Stark', age: 28},
// 	{firstName: 'Ricard', lastName: 'Karstark', age: 15},
// 	{firstName: 'Rumsy', lastName: 'Snow', age: 24},
// 	{firstName: 'Mira', lastName: 'Rid', age: 26},
// 	{firstName: 'Leo', lastName: 'Lefford', age: 55},
// 	{firstName: 'Robert', lastName: 'Barateon', age: 17},
// 	{firstName: 'Merrit', lastName: 'Trunt', age: 42},
// 	{firstName: 'Mendon',lastName: 'Moor', age: 38}
// ];

// let youngUsers = users.filter(function(user) {
// 	return user.age < 18;
// });

// users.forEach(function(user) {
// 	user['fullname'] = user.firstName + user.lastName;
// });

// let fullNames = users.map(function(user) {
// 	return user['fullname'];
// });

// 4

// ET 10
// AT 40

// let arr = ['John',1,2,3,4,5];

// let shiftArr = (arr) => {
// 	arr.splice(0, 1);
// }

// shiftArr(arr);

// 5

// ET 10
// AT 60

// let arr = [1,2,3,4];
// let newArr = [];

// function pushArr(arr, ...rest) {
// 	newArr = arr.concat(...rest);
// }

// pushArr(arr, 50, 30, 'John');
// console.log(newArr);

// 6

// ET 20
// AT 40
let clone = {};

let source = {firstname: 'Tom', age: 10};

function extend() {
	let args = [];

	for (let i = 0; i < arguments.length; i++) {
		args.push(arguments[i]);
	}

	let amount = args.reduce(function(total, person) {
		return total  person;
	}, {});

	console.log(amount);
}

let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s);

// let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s);

