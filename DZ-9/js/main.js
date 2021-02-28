'use strict';

// Работа с объектом события

// ET 0.5h
// AT 2

const body = document.querySelector('body');
const title = document.createElement('h2');
const div = document.createElement('div');
const absoluteCoords = document.createElement('h3');
const relativeCoords = document.createElement('h4');

title.innerHTML = 'Событыя';

div.setAttribute('style', 'width: 400px; height: 400px; background-color: tomato;');

body.prepend(title);
body.append(div);
div.before(absoluteCoords);
div.after(relativeCoords);

absoluteCoords.innerHTML = `X: 0 Y: 0`;
relativeCoords.innerHTML = `x: 0 y: 0`;

const divPosLeft = div.offsetLeft;
const divPosTop = div.offsetTop;

console.log(divPosLeft, divPosTop);

body.onmousemove = function (e) {
	absoluteCoords.innerHTML = `X: ${e.pageX} Y: ${e.pageY}`;
};

div.onmousemove = function (e) {
	relativeCoords.innerHTML = `x: ${e.pageX - divPosLeft} y: ${e.pageY - divPosTop}`;
};