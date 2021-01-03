'use strict';

// ET 30
// AT 4h

let ctx;

function Canvas(initCanvas) {
	let canvas = document.getElementById(initCanvas);
	ctx = canvas.getContext("2d");

	ctx.globalAlpha = .5;

	this.add = function() {
		for (let i = 0; i < arguments.length; i++) {
			arguments[i].draw();
		}
	}
}

function Figure(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;
}

function Line(x, y, x2, y2, color) {
	Figure.call(this, x, y, color);

	this.x2 = x2;
	this.y2 = y2;

	this.draw = function() {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x2, this.y2);
		ctx.stroke();
	}
}

function Rect(x, y, w, h, color) {
	Figure.call(this, x, y, color);

	this.w = w;
	this.h = h;

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.fill();
	}
}

function Circle(x, y, r, color) {
	Figure.call(this, x, y, color);

	this.r = r;

	this.draw = function() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fill();
	}
}

function Pattern(x, y, color, strokeWidth, step, lineCap) {
	Figure.call(this, x, y, color);

	this.step = step;
	this.lineCap = lineCap;
	this.strokeWidth = strokeWidth;
	this.posY = y + strokeWidth - strokeWidth / 3;
	this.posX = x;

	this.draw = function() {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.strokeWidth;
		ctx.lineCap = this.lineCap;

		for (let i = this.posX; i < ctx.canvas.width; i += this.step) {
			ctx.moveTo(this.posX = i + i, this.posY);
			ctx.lineTo(this.posX = i + i + this.step, this.posY + this.step);
			ctx.moveTo(this.posX = i + i + this.step, this.posY + this.step);
			ctx.lineTo(this.posX = i + i + this.step * 2, this.posY);
		}
		ctx.stroke();
	}
}

let drawArea = new Canvas('canvasID');

let line = new Line(50, 250, 200, 200, 'gray');

let line2 = new Line(62, 260, 212, 210, 'gray');
let rect = new Rect(260, 130, 60, 120, 'chartreuse');
let rect2 = new Rect(360, 150, 60, 40, 'gold');

let rect3 = new Rect(280, 120, 100, 50, 'deeppink');
let circle = new Circle(100, 80, 30, 'LightSkyBlue');

let circle2 = new Circle(120, 120, 50, 'LightSkyBlue');

let pattern = new Pattern(0, 0,'red', 1, 10,'square');

drawArea.add(line, line2, circle, circle2, rect, rect2, rect3);
drawArea.add(pattern);