window.onscroll = function showHeader() {
	var stickyMenu = document.querySelector('.navbar');
	if (window.pageYOffset > 50) {
		stickyMenu.classList.add('fixed-bar');
	} else {
		stickyMenu.classList.remove('fixed-bar');
	}
}