document.addEventListener('DOMContentLoaded', ready)

function ready() {
	var wow = new WOW();
	wow.init();
	$('.slides').slick({
		dots: true,
		infinite: true,
		speed: 900,
		fade: true
	});

	$('.menu-btn').on('click', function (e) {
		e.preventDefault;
		$(this).toggleClass('menu-btn_active');
		$('.menu-main').toggleClass('menu-main_active');
	});
	$('.overlay').on('click', e => closeMenu(e));
	$('.menu-nav__link').on('click', e => closeMenu(e));

	window.onscroll = function showHeader() {
		var stickyMenu = document.querySelector('.navbar');
		if (window.pageYOffset > 50) {
			stickyMenu.classList.add('fixed-bar');
			stickyMenu.classList.remove('no-fixed-bar');
		} else {
			stickyMenu.classList.add('no-fixed-bar');
			stickyMenu.classList.remove('fixed-bar');
		}

		if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
			document.getElementById("btnTop").style.display = "block";
		} else {
			document.getElementById("btnTop").style.display = "none";
		}
	}

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}

function closeMenu(){
	$(this).removeClass('menu-btn_active');
	$('.menu-main').removeClass('menu-main_active');
}

function topFunction() {
	$('html, body').animate({
		scrollTop: 0
	}, '50');
}

function changeLocale(locale) {
	var selectLang = document.getElementById('getLang');
	var locale = '';

	if (selectLang.value == 'en') {
		locale = '15z4pn';
	} else if (selectLang.value == 'ru') {
		locale = 'ow47b';
	} else if (selectLang.value == 'cn') {
		locale = '18yhoj';
	} else {
		locale = '15z4pn';
	}

	fetch('https://api.myjson.com/bins/' + locale).then(data => data.json()).then(lang => {
		const ignoreIdList = ['slideThird', 'slideFourth'];

		Object.keys(lang).forEach(function (id) {
			if (ignoreIdList.indexOf(id) === -1) {
				document.getElementById(id).innerHTML = lang[id];
			}
		});
	});


}