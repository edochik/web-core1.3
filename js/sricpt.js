// Swiper slider
const swiper = new Swiper('.swiper', {
	speed: 700,
	spaceBetween: 16,
	slidesPerView: 'auto',
	slidesOffsetAfter: 60,
	pagination: {
		el: '.swiper-pagination', // Селектор элемента пагинации
		clickable: true, // Сделать пагинацию кликабельной
	},
	breakpoints: {
		768: {
			enabled: false,
			spaceBetween: 0
		}
	}
});


const brandsLists = document.querySelector('.brands__list');
const buttonShowHidden = document.querySelector('.brands__btn');
const spanShow = document.querySelector('.brands__show');
const spanHide = document.querySelector('.brands__hide');



buttonShowHidden.addEventListener('click', function () {
	buttonShowHidden.classList.toggle('brands__btn--active');
	spanShow.classList.toggle('hide');
	spanHide.classList.toggle('hide');
	brandsLists.classList.toggle('brands__list--show');
});
