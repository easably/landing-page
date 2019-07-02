window.onscroll = function showHeader() {
	var stickyMenu = document.querySelector('.navbar');
	if (window.pageYOffset > 50) {
		stickyMenu.classList.add('fixed-bar');
	} else {
		stickyMenu.classList.remove('fixed-bar');
	}
}

window.onscroll = function scrollTop() {
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
/*debugger;*/	
document.getElementById('ourBlog').innerHTML = lang.ourBlog; 
document.getElementById('ourApp').innerHTML = lang.ourApp; 
document.getElementById('HowItWork').innerHTML = lang.HowItWork;
document.getElementById('learningSources').innerHTML = lang.learningSources;
document.getElementById('headerTitle').innerHTML = lang.headerTitle;
document.getElementById('headerSubtitle').innerHTML = lang.headerSubtitle;
document.getElementById('buttonStarted').innerHTML = lang.buttonStarted;
document.getElementById('headPleasure').innerHTML = lang.headPleasure;
document.getElementById('contentPleasure').innerHTML = lang.contentPleasure;
document.getElementById('headMemory').innerHTML = lang.headMemory;
document.getElementById('contentMemory').innerHTML = lang.contentMemory;
document.getElementById('headOurApp').innerHTML = lang.headOurApp;
document.getElementById('contentOurApp').innerHTML = lang.contentOurApp;
document.getElementById('extension').innerHTML = lang.extension;
document.getElementById('extensionGuide').innerHTML = lang.extensionGuide;
document.getElementById('headHowItWorks').innerHTML = lang.headHowItWorks;
document.getElementById('sliderCaptionFirst').innerHTML = lang.sliderCaptionFirst;
document.getElementById('sliderCaptionSecond').innerHTML = lang.sliderCaptionSecond;
/*document.getElementById('slideThird').innerHTML = lang.slideThird;
document.getElementById('slideFourth').innerHTML = lang.slideFourth;
*/document.getElementById('blog').innerHTML = lang.blog;
document.getElementById('Blog').innerHTML = lang.Blog;
document.getElementById('headSource').innerHTML = lang.headSource;
document.getElementById('contentSource').innerHTML = lang.contentSource;
document.getElementById('music').innerHTML = lang.music;
document.getElementById('musicParagraph').innerHTML = lang.musicParagraph;
document.getElementById('news').innerHTML = lang.news;
document.getElementById('newsParagraph').innerHTML = lang.newsParagraph;
document.getElementById('video').innerHTML = lang.video;
document.getElementById('videoParagraph').innerHTML = lang.videoParagraph;
document.getElementById('book').innerHTML = lang.book;
document.getElementById('bookParagraph').innerHTML = lang.bookParagraph;
document.getElementById('movie').innerHTML = lang.movie;
document.getElementById('movieParagraph').innerHTML = lang.movieParagraph;
document.getElementById('getStarted').innerHTML = lang.getStarted;

}); 


}