'use strict';

// 1

let a = 5;
let b = a * 3;
let с = a + b;

// console.log(a, b, с);

// 2

// let firstName = prompt('Введите ваше имя', 'Вася');
// let lastName = prompt('Введите вашу фамилию', 'Васильев');
// console.log(`"What’s up ${firstName} ${lastName}"`);

// 3
// let result = null;
// let firstNumber = +prompt('Введите первое число');
// let secondNumber = +prompt('Введите второе число');

// result = firstNumber * secondNumber;
// alert(result);
// result = firstNumber / secondNumber;
// alert(result);
// result = firstNumber - secondNumber;
// alert(result);
// result = firstNumber + secondNumber;
// alert(result);

// 4

// let workDays = +prompt('Введите количество рабочих дней в неделе');
// let workHours = +prompt('Введите количество рабочих часов в день');
// let hourlyRate = +prompt('Введите Ваш часовой рейт');
// let result = (workDays * 4) * workHours * hourlyRate;

// alert(`Ваша З/П за июль ${result}$`);

// 5

// let errorMessage = 'Попробуйте еще раз';
// let successMessage = 'Вы ввели правильное число';

// while (true) {
// 	let inputNumber = +prompt('Введите нечётное число', '3' );

// 	if ( inputNumber % 2 != 0 ) {
// 		alert(successMessage);
// 		break;
// 	} else {
// 		alert(errorMessage);
// 	}
// }

// 6

// let inputValue = prompt('Введите что-нибудь');

// if (isNaN(inputValue)) {
// 	alert('Вы ввели строку');
// } else {
// 	alert('Вы ввели число');
// }

// 7

// let randomNumber = Math.round(Math.random() * 100);
// let inputNumber = +prompt('Введите число');

// if (randomNumber > inputNumber) {
// 	alert(`Случайное число (${randomNumber}) > (${inputNumber}) введенного числа`);
// } else if (randomNumber === inputNumber) {
// 	alert(`Случайное число (${randomNumber}) = (${inputNumber}) введенному числу`);
// } else {
// 	alert(`Случайное число (${randomNumber}) < (${inputNumber}) введенного числа`);
// }

// 8

// let str = prompt('Что вам нравится изучать?', 'Мне нравится изучать Front-end');
let str = 'Мне нравится изучать Front-end';
let myFavoritTheme = prompt('Что вам нравится изучать?', '');
let subStr = str.substring(0, 21);

console.log(subStr);



