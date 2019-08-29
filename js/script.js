window.onscroll = function showHeader() {
	var stickyMenu = document.querySelector('.navbar');
	if (window.pageYOffset > 50) {
		stickyMenu.classList.add('fixed-bar');
	} else {
		stickyMenu.classList.remove('fixed-bar');
	}

	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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

	Object.keys(lang).forEach(function(id) {
		if (ignoreIdList.indexOf(id) === -1) {
			document.getElementById(id).innerHTML = lang[id]; 
		}
	});
}); 


}