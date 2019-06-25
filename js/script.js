window.onscroll = function showHeader() {
	var stickyMenu = document.querySelector('.navbar');
	if (window.pageYOffset > 50) {
		stickyMenu.classList.add('fixed-bar');
	} else {
		stickyMenu.classList.remove('fixed-bar');
	}
}

function changeLocale(locale) { 
fetch('https://api.myjson.com/bins/' + locale) 
.then(data => data.json()) 
.then(lang => { 
document.getElementById('ourApp').innerHTML = lang.ourApp; 
document.getElementById('howItWork').innerHTML = lang.howItWork; 
//... 
}); 
} 
document.getElementById('getLang').onchange = function() { 
changeLocale('wujox'); 
} 
