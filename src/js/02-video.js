import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoFrame = document.querySelector('iframe');
const playerVimeo = new Vimeo(videoFrame);

if (localStorage.getItem('videoplayer-current-time')) {
  playerVimeo.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
const throttleTimeUpdate = throttle(handleTimeUpdate, 1000);
playerVimeo.on('timeupdate', throttleTimeUpdate);

function handleTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
