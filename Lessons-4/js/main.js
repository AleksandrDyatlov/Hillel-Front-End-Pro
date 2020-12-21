'use strict';

// Массивы и объекты

// 1

// ET 15
// AT 20

// let sum = 0;
// let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

// for (let i = 0; i < arr.length; i++) {
// 	if (Number(arr[i])) {
// 		sum = sum + Number(arr[i]);
// 	} else {
// 		continue;
// 	}
// }

// alert(sum);

// 2

// ET 15
// AT 30

// let arr = [];

// for (var i = 0; i < 5; i++) {
// 	arr.push(Math.random().toFixed(2));
// }

// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
// 	arr[i] = arr[i] ** 5;

// 	console.log(arr[i]);
// }

// 3

// ET 15
// AT 40

// let arr = ['AngularJS', 'jQuery'];

// arr.unshift('Backbone.js');
// arr.push('ReactJS', 'Vue.js');
// arr.splice(1, 0, 'CommonJS');
// alert(`Это здесь лишнее ${arr[3]}`);
// arr.splice(3, 1);
// console.log(arr);

// 4 ?

// ET 10
// AT 1

let str = 'Как однажды Жак звонарь сломал фонарь головой';
let arr = str.split(' ');
arr.splice(1, 1);
arr.splice(3, 0, 'однажды');
arr[1] = arr.splice(1,1, arr[1]);
// arr.splice(4, 1);
console.log(arr);

// 5
// ET 15
// AT 20

// let property = prompt('Введите свойство', '');
// let value = '';
// let person = {
// 	'name': 'John',
// 	'age': 23,
// 	'gender': 'male'
// }

// if (property in person) {
// 	console.log(person.name);
// } else {
// 	value = prompt('Введите значение свойства', '');
// 	person[property] = value;
// };

// console.log(person);

// 6

// ET 10
// AT 20

// let person = {
// 	'name': 'John',
// 	'age': 23,
// 	'gender': 'male'
// }

// let phone = {
// 	brand: prompt('Phone brand'),
// 	model: prompt('Phone model'),
// 	resolution: prompt('Phone resolution'),
// 	color: prompt('Phone color')
// }

// person['phone'] = phone;

// console.log(person);

// 7

// ET 10
// AT 30

// let dates = {
// 	current: new Date(),
// 	past: Date.parse(new Date()) - (365 * 24 * 3600 * 1000)
// }

// let userDate = Date.parse(new Date(prompt('Введите дату в формате', '2020-12-20')));

// if (userDate <= dates.current && userDate >= dates.past) {
// 	alert('Введенная дата попадает в диапазон заданных дат');
// } else {
// 	alert('Введенная дата НЕ попадает в диапазон заданных дат');
// }

// 8

// ET 15
// AT 20

// let arr = [];
// let result = 0;

// for (var i = 0; i < 10; i++) {
// 	let inputValue = prompt('Введите любой символ', '');

// 	arr.push(inputValue);
// }

// for (var i = 0; i < arr.length; i++) {
// 	if (Number(arr[i])) {
// 		result += Number(arr[i]);
// 	}
// }

// alert(`Сумма чисел = ${result}`);


// 9

// ET 15
// AT 30

// let arr = [];
// let arrInner = [];

// for (let i = 1; i <= 10; i++) {

// 	for (let j = 1; j <= 10; j++) {
// 		let c = i * j;

// 		arrInner.push(`${i} * ${j} = ${c}`);
// 	}
// }

// for (let i = 0; i < arrInner.length; i += 10) {
// 	arr.push(arrInner.slice(i, i + 10));
// }
// console.log(arr);

// 10

// ET 5
// AT 15

// let img = {
// 	tag: 'img',
// 	src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
// 	alt: '',
// 	style: 'border: 1px solid #ccc',
// 	width: 200
// };
