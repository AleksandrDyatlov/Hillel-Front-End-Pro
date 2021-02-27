'use strict';

// Работа с часами (работаем с нативным JS)

// 1

// ET 30
// AT 3

setClock();

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	return {
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	}
}

function getZero(num) {
	if(num >= 0 && num < 10 ) {
		return `0${num}`;
	} else {
		return num;
	}
}

function creatElem(tagName, className, innerText = '') {
	const holder = document.body;
	const elem = document.createElement(tagName);
	const elemText = document.createTextNode(innerText);

	elem.classList.add(className);
	elem.appendChild(elemText);
	holder.prepend(elem);

	return elem;
}

function setClock() {
	let isTimerActive = true;
	const activeClass = 'active';
	const timer = creatElem('h2', 'timer');
	const btnWrapp = creatElem('div', 'btn-wrapp');
	const btnStart = creatElem('button', 'btn-start', 'Start');
	const btnStop = creatElem('button', 'btn-stop', 'Stop');
	let timeInterval = setInterval(updateClock, 1000);

	btnWrapp.append(btnStart, btnStop);
	btnStart.classList.add(activeClass);

	btnStart.addEventListener('click', function() {
		if (!isTimerActive) {
			timeInterval = setInterval(updateClock, 1000);
		}

		isTimerActive = true;

		this.classList.add(activeClass);
		btnStop.classList.remove(activeClass);
	});

	btnStop.addEventListener('click', function() {
		clearInterval(timeInterval);

		isTimerActive = false;

		this.classList.add(activeClass);
		btnStart.classList.remove(activeClass);
	});

	updateClock();

	function updateClock() {
		const t = getTime();

		timer.innerHTML = `${getZero(t.hours)} : ${getZero(t.minutes)} : ${getZero(t.seconds)}`;
	}
}