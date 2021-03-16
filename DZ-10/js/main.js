'use strict';

// тут может находится ваш код

function animate() {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	// тут может находится ваш код

	requestAnimationFrame(animate);
}

// тут может находится ваш код

document.body.onload = animate;
