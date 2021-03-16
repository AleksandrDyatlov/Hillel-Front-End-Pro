const $searchForm = $('#search-form');
const $input = $('[name="film-name"]');
const $slider = $('.film-slider');

const initSlider = () => {
	$slider.slick({
		infinite: true,
		speed: 500,
		fade: true
	});

	$slider.on('beforeChange', function(event, slick, currentSlide){
		const currSlide = slick.$slides.eq(currentSlide);
		const currVideo = currSlide.find('video')[0];

		currVideo.pause();
	});

	$slider.on('afterChange', function(event, slick, currentSlide){
		const currSlide = slick.$slides.eq(currentSlide);
		const currVideo = currSlide.find('video')[0];

		if (currVideo.currentTime !== 0) {
			currVideo.play();
		}
	});
}

const createSlider = (data) => {
	data.results.forEach((item) => {
		const slide = $(
			`<div class="slide">
				<video controls>
					<source src="${item.previewUrl}" type="video/x-m4v">
				</video>
			</div>`
		);

		slide.appendTo($slider);
	});

	initSlider();
};

const clearSlider = () => {
	if ($slider.hasClass('slick-initialized')) {
		$slider.slick('unslick');
	}

	$slider.empty();
}

const getFilms = (data) => {
	clearSlider();

	$.getJSON('https://itunes.apple.com/search', {
			limit: 10,
			entity: 'musicVideo',
			term: data
		})
		.done((response) => createSlider(response))
		.fail((error) => console.log(error));
};

$searchForm.on('submit', (e) => {
	e.preventDefault();
	const text = $input.val().replaceAll(' ', '-');
	getFilms(text);
});