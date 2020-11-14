var imageUrl = 'http://beta.flockthemes.com/wp-wedding-paradise/rose/wp-content/themes/wedding-paradise/images/heart-snowfall.png';
$(document).ready(function () {
  $('#snowfall').snowfall({ image: imageUrl, minSize: 10, maxSize: 32 });
  // const audio = document.createElement('audio');
//  audio.autoplay = true;
  // audio.src = 'FinalBGMusic.MP3';
  // audio.load();
  // audio.loop = 'loop';
  // audio.preload = 'auto';
  // console.log(" playing audio ")
  $("#my_audio").get(0).play();
});