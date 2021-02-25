'use strict';

// Методы объектов и контекст исполнения функции

// 1

// ET 15
// AT 20

let calculator = {
	read: function() {
		this.x = +prompt('Введите первое число', '0'),
		this.y = +prompt('Введите второе число', '0')
	},
	sum: function() {
		return this.x + this.y;
	},
	multi: function() {
		return this.x * this.y;
	},
	diff: function() {
		return this.x - this.y;
	},
	div: function() {
		return this.x / this.y;
	}
}

calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());

// 2

// ET 15
// AT 30

let coffeeMachine = {
	message: 'Your coffee is ready!',
	start: function() {
		setTimeout(() => alert(this.message), 3000);
	}
}

coffeeMachine.start();


// 3

// ET 15
// AT 30

let counter = {
	count: 0,
	inc: function() {
		this.count++;
		return this;
	},
	dec: function() {
		this.count--;
		return this;
	},
	getValue: function() {
		return this.count;
	}
}

let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);

// 4

// ET 15
// AT 40

let me = {
	getSum: function(x, y) {
		this.x = x;
		this.y = y;
		return x + ' + ' + y + ' = ' + calculator.sum.call(this);
	},
	getMulti: function(x, y) {
		this.x = x;
		this.y = y;
		return x + ' * ' + y + ' = ' + calculator.multi.call(this);
	},
	getDiff: function(x, y) {
		this.x = x;
		this.y = y;
		return x + ' - ' + y + ' = ' + calculator.diff.call(this);
	},
	getDiv: function(x, y) {
		this.x = x;
		this.y = y;
		return x + ' / ' + y + ' = ' + calculator.div.call(this);
	}
}

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));

// 5

// ET 15
// AT 20

let country = {
	name: 'Ukraine',
	language: 'ukrainian',
	capital: {
		name: 'Kyiv',
		population: 2907817,
		area: 847.66
	}
};

function format(start, end) {
	console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.name, ['', '']); // undefined

// 6

// ET 15
// AT 30

let user = {
	name: 'John'
}

function format(start, end) {
	console.log(start + this.name + end);
}

let userFormat = format.bind(user);

userFormat('<<<', '>>>');

// 6

// ET 15
// AT 20

function concat(str1, delim, str2) {
	return console.log(str1 + delim + str2);
}

let hello = concat.bind(null,"Hello", ' ');

hello('World');
hello('John');


// Рекурсия

// 1

// ET 20
// AT 60

function cube(x) {
	let result = x;

	for (let i = 1; i < 3 ; i++) {
		result *= x;
	}

	return result;
}

alert(cube(2));  // 8

function cube(x, y) {
	let n = y || 3;
	if (n === 1) {
		return x;
	}

	return x * cube(x, n - 1);
}

alert(cube(2));  // 8

//2

// ET 20
// AT 60

function sum(...args) {
	if (args.length === 1) {
		return args[0];
	} else {
		let lastParam = args.pop();
		let preLastParam = args.pop();
		return sum(...args, lastParam + preLastParam);
	}
}

console.log(sum(1, 2, 3, 4, 5));
