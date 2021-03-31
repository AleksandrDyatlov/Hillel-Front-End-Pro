'use strict';

// тут может находится ваш код

const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
const score = document.querySelector('#score');

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

// function drawRect(ctx) {
// 	let w = 20;
// 	let h = w;
// 	let x = 0;
// 	let y = 0;
//
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(x, y, w, h);
// }

let speed = 0;

const opts = {
	count: 3,
	size: 20
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const ctxW = canvas.clientWidth;
const ctxH = canvas.clientHeight;

function animate() {

	step();

	// тут может находится ваш код

	requestAnimationFrame(animate);
}

function step() {
	speed++;

	ctx.fillStyle = 'red';

	for (var i = 0; i < Math.round(opts.count); i++) {
		let random = Math.random() * opts.size;
		ctx.fillRect(-(opts.size / 2) + Math.random() * ctxW, -(opts.size / 2) + Math.random() * ctxH, opts.size, opts.size);
	}

	// ctx.clearRect(0, 0, ctxW, ctxH);
}

// тут может находится ваш код

document.body.onload = animate;
