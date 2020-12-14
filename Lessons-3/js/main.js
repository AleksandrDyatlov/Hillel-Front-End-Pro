'use strict';

// Условные и логические операторы
// 1

// let x = +prompt('Введите любое число', '');
//
// if (isNaN(x)) {
// 	console.log('Введите число');
// } else {
// 	if (x < 0) {
// 		console.log(`${x} - отрицательное число`);
// 	} else if (x > 0) {
// 		console.log(`${x} - положительное число`);
// 	} else {
// 		console.log(`${x} - равно нулю`);
// 	}
// }

// 2

// let mySum = +prompt('Какая сумма у вас?', '');
// let friendSum = +prompt('Какая сумма у вашего друга?', '');
// let ourSum = mySum + friendSum;
//
// ourSum <= 100 ? alert('Вы можете выпить пива') : alert('Вы можете полететь на Майорку');

// 3

// let age = 30;
//
// if (age >= 20 && age < 27) alert('Выслать повестку');

// 4

// let minibusNumber = +prompt('Введите номер маршрутки', '');

// if (minibusNumber === 7 || minibusNumber === 225 || minibusNumber === 255 ) {
// 	alert('Вы едете домой');
// } else {
// 	alert('Вы ожидаете');
// }

// 5

// let day = 'суббота';

// (day !== 'суббота' && day !== 'воскресенье') ? alert('Нужно валить на работу') : alert('Сегодня выходной!!!');

// 6

// let x = +prompt('Введите первое число от -20 до 20', '');
// let y = +prompt('Введите второе число от -20 до 20', '');

// (x <= 1 && y >= 3 || y < 3) ? console.log(x + y) : console.log('Неверно!');

// 7

// let x = +prompt('Введите первое число', '');
// let y = +prompt('Введите второе число', '');

// if (x > 2 && x < 11 || y >= 6 && y < 14) {
// 	x = x * 2;
// 	alert(x);
// } else {
// 	x = x + 5;
// 	alert(x);
// }

// 8

// while (true) {
// 	let userName = prompt('Введите Ваше имя', '');

// 	if (userName !== null && userName != false) {
// 		alert(`Привет ${userName}`);
// 		break;
// 	} else {
// 		alert(`Введите корректное значение`);
// 	}
// }

// 9

// let greeting = '';
// let lang = prompt('Введите один из языков', '"ru", "en", "de"');

// if (lang === 'ru') {
// 	greeting = 'Приветствую тебя мой друг!';
// 	alert(greeting);
// } else if (lang === 'en') {
// 	greeting = 'Hello my friend!';
// 	alert(greeting);
// } else {
// 	greeting = 'Grüße mein Freund!';
// 	alert(greeting);
// }

// switch(lang) {
// 	case "ru":
// 		greeting = 'Приветствую тебя мой друг!';
// 		alert(greeting);
// 		break;
// 	case "en":
// 		greeting = 'Hello my friend!';
// 		alert(greeting);
// 		break;
// 	default:
// 		greeting = 'Grüße mein Freund!';
// 		alert(greeting);
// }

// 10

// let month = new Date();

// switch(month.getMonth()) {
// 	case 0:
// 	case 1:
// 	case 11:
// 		alert('Зима');
// 		break;
// 	case 2:
// 	case 3:
// 	case 4:
// 		alert('Весна');
// 		break;
// 	case 5:
// 	case 6:
// 	case 7:
// 		alert('Лето');
// 		break;
// 	default:
// 		alert('Осень');
// }


// 11

// let month = new Date();


// Циклы

// 1

// let a = '.';
// let b = '#';
// let c = a + b;
// let result = '';

// for (var i = 0; i < 5; i++) {
// 	result = result + c;

// 	if (result.length == 10) {
// 		result = result + a;
// 	}
// }

// console.log(result);

// 2

// for (var i = 0; i <= 10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i ** 2);
// 	}
// }

// 3

// let userName = 'John';
// let str = 'Happy birthday to you';
// let strName = `Happy birthday dear ${userName}`;

// for (var i = 0; i < 4; i++) {
// 	console.log(str);
// }


// switch(str) {
// 	case 1:
// 	case 2:
// 		console.log(str);
// 		break;
// 	case 3:
// 		console.log(strName);
// 		break;
// 	case 4:
// 		console.log(str);
// }
// for (var i = 1; i <= 4; i++) {
// 	console.log(tempStr = strName + "\n");

// 	if (i == 2) {
// 		console.log(tempStr = strName + "\n");
// 	}

// 	// console.log(tempStr);
// }

// 11

for (var i = 1; i <= 50; i++) {
	if (i % 3 == 0) {
		console.log('Fizz');
	} else if (i % 5 == 0) {
		console.log('Buzz');
	} else if (i % 3 == 0 && i % 5 == 0) {
		console.log('FizzBuzz');
	} else {
		console.log(i);
	}
}