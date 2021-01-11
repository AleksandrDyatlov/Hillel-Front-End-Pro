'use strict';

// ET 15
// AT 15  это если готовый переписать на классы ))

class Canvas {
	constructor(initCanvas) {
		this.canvas = document.getElementById(initCanvas);
		this.ctx = this.canvas.getContext("2d");
		this.ctx.globalAlpha = .5;
	}

	add() {
		for (let i = 0; i < arguments.length; i++) {
			arguments[i].draw(this.ctx);
		}
	}
}

class Figure {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}
}

class Line extends Figure {
	constructor(x2, y2, x, y, color) {
		super(x, y, color);

		this.x2 = x2;
		this.y2 = y2;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x2, this.y2);
		ctx.stroke();
	}
}

class Rect extends Figure {
	constructor(x, y, w, h, color) {
		super(x, y, color);

		this.w = w;
		this.h = h;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.fill();
	}
}

class Circle extends Figure {
	constructor(x, y, r, color) {
		super(x, y, color);

		this.r = r;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fill();
	}
}

class Pattern extends Figure {
	constructor(x, y, color, strokeWidth, step, lineCap) {
		super(x, y, color);

		this.step = step;
		this.lineCap = lineCap;
		this.strokeWidth = strokeWidth;
		this.posY = y + strokeWidth - strokeWidth / 3;
		this.posX = x;
	}

	draw(ctx) {
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