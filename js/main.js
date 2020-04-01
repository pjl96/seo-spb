$(document).ready(function () {
  
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '_Qe-vVit56M',
      events: {
        'onReady': videoPlay,
      }
    });
  })
  function videoPlay(event) { 
    event.target.playVideo();
  }

  var mySwiper = new Swiper ('.cases__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.cases__swiper-button-next',
      prevEl: '.cases__swiper-button-prev',
    },
  })
  var mySwiper = new Swiper ('.reviews__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
  })
  var mySwiper = new Swiper ('.news__swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.news__swiper-button-next',
      prevEl: '.news__swiper-button-prev',
    },
  })

});