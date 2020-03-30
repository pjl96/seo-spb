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

});