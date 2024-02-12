//Date And Time
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();

setInterval(function () {
	showTime();
}, 1000);

//Back To Top
let myButton = document.getElementById('btn-back-to-top');

window.onscroll = function (){
	scrollFuction();
}

function scrollFuction() {
	if(
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	){
		myButton.style.display = 'block';
	}else{
		myButton.style.display = 'none';
	}
}

myButton.addEventListener('click',backToTop);
function backToTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

})(jQuery);
