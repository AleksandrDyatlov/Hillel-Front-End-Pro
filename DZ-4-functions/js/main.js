'use strict';

// Функции

// 1

// ET 2
// AT 3

let max = (a, b) => {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.log(max(0, -1));

// 2

// ET 20
// AT 30

function min() {
	let result = 0;

	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] < result) {
			result = arguments[i];
		}
	}

	return result;
}

console.log(min(0, -1, 100, 500, 100500));

// 3

// ET 20
// AT 40

let users = [
	{firstName: 'John', lastName: 'Snow', age: 16},
	{firstName: 'Eddart', lastName: 'Stark', age: 30},
	{firstName: 'Keytlin', lastName: 'Stark', age: 28},
	{firstName: 'Ricard', lastName: 'Karstark', age: 15},
	{firstName: 'Rumsy', lastName: 'Snow', age: 24},
	{firstName: 'Mira', lastName: 'Rid', age: 26},
	{firstName: 'Leo', lastName: 'Lefford', age: 55},
	{firstName: 'Robert', lastName: 'Barateon', age: 17},
	{firstName: 'Merrit', lastName: 'Trunt', age: 42},
	{firstName: 'Mendon',lastName: 'Moor', age: 38}
];

let youngUsers = users.filter(function(user) {
	return user.age < 18;
});

users.forEach(function(user) {
	user['fullname'] = user.firstName + user.lastName;
});

let fullNames = users.map(function(user) {
	return user['fullname'];
});

// 4

// ET 10
// AT 40

let arr = ['John',1,2,3,4,5];

let shiftArr = (arr) => {
	arr.splice(0, 1);
}

shiftArr(arr);

console.log(arr);

// 5

// ET 10
// AT 60

let arr = [1,2,3,4];
let newArr = [];

function pushArr(arr, ...param) {

	newArr = arr.concat(...param);
}

pushArr(arr, 50, 30, 'John');

console.log(newArr);

// 6

// ET 20
// AT 60

let source = {firstname: 'Tom', age: 10};

function extend() {
	let args = [...arguments];

	const obj = {};

	for (let i = 0; i < args.length; i++) {
		for (let key in args[i]) {
			obj[key] = args[i][key];
		}
	}
	return obj;
}

let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});

console.log(s);

// 7

// ET 15
// AT 15

function setComment(date, message, author = 'Anonymous') {
	if (!date || !message) {
		alert('Данные переданы некорректно');
		return;
	}

	console.log(`${author}, ${date}\n${message}`);
}

setComment(null, 'Everything is ok');
setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');


// Замыкания

// 1

// ET 15
// AT 30

function createTimer() {
	let t1 = performance.now();

	return () => {
		let t2 = performance.now();
		return "Действие заняло " + (t2 - t1) + " миллисекунд.";
	};
}

let timer = createTimer();

alert('!');
alert(timer());

// 2

// ET 15
// AT 30

function createAdder(value) {
	let param1 = value;

	return (param2) => {
		return param1 + param2;
	};
}

let hello = createAdder('Hello, ');

alert(hello('John'));
alert(hello('Harry'));

let plus = createAdder(5);

alert(plus(1));
alert(plus(5));