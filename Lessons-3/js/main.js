'use strict';

// Условные и логические операторы
// 1

// let x = +prompt('Введите любое число', '');

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

// // 2

// let mySum = +prompt('Какая сумма у вас?', '');
// let friendSum = +prompt('Какая сумма у вашего друга?', '');
// let ourSum = mySum + friendSum;

// ourSum <= 100 ? alert('Вы можете выпить пива') : alert('Вы можете полететь на Майорку');

// // 3

// let age = 30;

// if (age >= 20 && age < 27) alert('Выслать повестку');

// // 4

// let minibusNumber = +prompt('Введите номер маршрутки', '');

// if (minibusNumber === 7 || minibusNumber === 225 || minibusNumber === 255 ) {
// 	alert('Вы едете домой');
// } else {
// 	alert('Вы ожидаете');
// }

// // 5

// let day = 'суббота';

// (day !== 'суббота' && day !== 'воскресенье') ? alert('Нужно валить на работу') : alert('Сегодня выходной!!!');

// // 6

// let x = +prompt('Введите первое число от -20 до 20', '');
// let y = +prompt('Введите второе число от -20 до 20', '');

// (x <= 1 && y >= 3 || y < 3) ? console.log(x + y) : console.log('Неверно!');

// // 7

// let x = +prompt('Введите первое число', '');
// let y = +prompt('Введите второе число', '');

// if (x > 2 && x < 11 || y >= 6 && y < 14) {
// 	x = x * 2;
// 	alert(x);
// } else {
// 	x = x + 5;
// 	alert(x);
// }

// // 8

// while (true) {
// 	let userName = prompt('Введите Ваше имя', '');

// 	if (userName !== null && userName != false) {
// 		alert(`Привет ${userName}`);
// 		break;
// 	} else {
// 		alert(`Введите корректное значение`);
// 	}
// }

// // 9

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

// // 10

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


// // 11

// let lang = prompt('Введите один из языков', '"ru", "en"');
// let day = prompt('Введите день недели', 'От 1 до 7');
// let result = '';

// switch(lang) {
// 	case 'ru':
// 		switch(Number(day) - 1) {
// 			case 0:
// 				alert(result = 'воскресенье');
// 				break;
// 			case 1:
// 				alert(result = 'понедельник');
// 				break;
// 			case 2:
// 				alert(result = 'вторник');
// 				break;
// 			case 3:
// 				alert(result = 'среда');
// 				break;
// 			case 4:
// 				alert(result = 'четверг');
// 				break;
// 			case 5:
// 				alert(result = 'пятница');
// 				break;
// 			default:
// 				alert(result = 'суббота');
// 		}
// 		break;
// 	case 'en':
// 		switch(Number(day) - 1) {
// 			case 0:
// 				alert(result = 'sunday');
// 				break;
// 			case 1:
// 				alert(result = 'monday');
// 				break;
// 			case 2:
// 				alert(result = 'tuesday');
// 				break;
// 			case 3:
// 				alert(result = 'wednesday');
// 				break;
// 			case 4:
// 				alert(result = 'thursday');
// 				break;
// 			case 5:
// 				alert(result = 'friday');
// 				break;
// 			default:
// 				alert(result = 'saturday');
// 		}
// 		break;
// }

// // 12


// let name = prompt('Введите ваше имя', 'Kate');
// let age = prompt('Ваш возраст', '15');

// switch (name, Number(age)) {
//     case ('John' && 29):
//         console.log(`Привет (${name}) (${age})`);
//         break;
//     case ('Kate' && 15):
//         console.log(`Привет (${name}) (${age})`);
//         break;
//     default:
//         console.log('Пока');
// }

// name === 'John' && Number(age) === 29
//                                    ? console.log(`Привет (${name}) (${age})`)
//                                    : name === 'Kate' && Number(age) === 15
//                                                                         ? console.log(`Привет (${name}) (${age})`)
//                                                                         : console.log('Пока');


// ***
// Циклы
// ***


// 1

// let a = '.';
// let b = '#';
// let c = a + b;
// let result = '';

// for (let i = 0; i < 5; i++) {
// 	result = result + c;

// 	if (result.length == 10) {
// 		result = result + a;
// 	}
// }

// console.log(result);

// // 2

// for (let i = 0; i <= 10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i ** 2);
// 	}
// }

// // 3

// let userName = 'John';
// let str = 'Happy birthday to you';
// let strName = `Happy birthday dear ${userName}`;

// for (let i = 1; i <= 4; i++) {
//     switch(i) {
//         case 1:
//             console.log(str);
//             break;
//         case 2:
//             console.log(str);
//             break;
//         case 3:
//             console.log(strName);
//             break;
//         case 4:
//             console.log(str);
//     }
// }

// 4

for (var i = 0; i <= 5; i++) {
	let num = prompt('Введите число', '');

	if (i === 2) {
		let conf = confirm('Вы уверены, что хотите отменить ввод чисел?');

		if (conf) {
			break;
		} else {
			continue;
		}
	}
}

// 5

// let x = prompt('Введите число', '');
// let b = 0;

// for (let i = 1; i < Number(x); i++) {
//     if (i % 2 !== 0) {
//         b = i + b;
//     }
// }
// alert(b);

// 6

for (let i = 1;; i++) {
    let x = +Math.random().toFixed(2);

    if (x > 0.9) {
        console.log(x);
        console.log(i);
        break;
    }
}

// 7

for (let i = 1; i <= 10 ; i++) {
	for (let j = 1; j <= 10; j++) {
		let c = i * j;

		console.log(`${i} * ${j} = ${c}`);
	}
}

// 8 
// если вынести с цикла я это понялб задание то было в одном цикле это сделать, если так было возможно, то я зря мучался ))

let str = '01';

for (let i = 0, a = 0, b = 1, c = 0; i <= 5; i++, c = a + b, a = b, b = c, str = str + c) {}

console.log(str);

// 9

// let sum = 0;
// let str = '';

// while (true) {
// 	let num = prompt('Введите число', '');

// 	if ( num != null ) {
// 		sum = sum + Number(num);
// 		str = str + num;
// 	} else {
// 		break;
// 	}
// }

// console.log(`Введено ${str.length} числа`);
// console.log(`Сумма введенных чисел равна ${sum}`);
// console.log(`Среднее арифметическое чисел равно ${sum / Number(str.length)}`);

// 10

// let validPassword = 'qwerty';
// let errorMessage = 'Пароль не верный :( попробуйте еще раз!'

// while (true) {
// 	let inputPassword = prompt('Введите пароль', 'qwerty');

// 	if (validPassword === inputPassword) {
// 		alert('Вы успешно авторизованы! )');
// 		break;
// 	} else if (inputPassword !== null) {
// 		alert(errorMessage);
// 	} else if (inputPassword === null) {
// 		let conf = confirm("Вы уверены, что хотите отменить авторизацию?");

// 		if (conf) {
// 			alert('Вы отменили авторизацию');
// 			break;
// 		} else {
// 			continue;
// 		}
// 	} else {
// 		alert(errorMessage);
// 		continue;
// 	}
// }

// 11

// for (let i = 1; i <= 50; i++) {
// 	if (i % 5 == 0 && i % 3 == 0) {
// 		console.log('FizzBuzz');
// 	} else if (i % 5 == 0) {
// 		console.log('Buzz');
// 	} else if (i % 3 == 0) {
// 		console.log('Fizz');
// 	} else {
// 		console.log(i);
// 	}
// }