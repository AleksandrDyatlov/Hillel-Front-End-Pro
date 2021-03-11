'use strict';

// Работа с запросом и данными

// ET 0.5h
// AT 1

const body = document.querySelector('body');

const createContent = (data) => {
	const planets = data.planets;
	const mainContent = data.main;

	const header = document.createElement('header');
	const main = document.createElement('main');
	const headerDate = document.createElement('h1');
	const headerTitle = document.createElement('h2');
	const headerInfo = document.createElement('p');

	body.prepend(header);
	header.after(main);

	header.appendChild(headerDate);
	header.appendChild(headerTitle);
	header.appendChild(headerInfo);

	headerDate.innerHTML = mainContent.cosmos;
	headerTitle.innerHTML = mainContent.infoCosmos;
	headerInfo.innerHTML = mainContent.infoFly;

	for (let key in planets) {
		const planetItem = planets[key];
		const article = document.createElement('article');
		const h2 = document.createElement('h2');
		const img = document.createElement('img');

		main.appendChild(article);
		article.appendChild(img);
		article.appendChild(h2);

		planetItem.info.forEach((item) => {
			const p = document.createElement('p');

			article.appendChild(p);
			p.innerHTML = item;
		});

		h2.innerHTML = planetItem.title;
		img.setAttribute('src', planetItem.url);
	}
};

fetch('https://trevadim.github.io/vue/data/data.json')
	.then((data) => data.json())
	.then((result) => createContent(result))
	.catch((error) => console.log("error", error));

