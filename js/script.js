$('.header__burger').click(function(event){
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
});

$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    easing: 'ease',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    centerMode:true,
    waitForAnimate: true,
    variableWidth: true,
  });
});

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function playButton() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fas fa-pause'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='fas fa-play'>";
    }
}
