import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframEl = document.querySelector('iframe');
const playerEl = new Player(iframEl);

const currentTrottledTime = throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds.toString());
}, 1000);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime !== null) {
    playerEl.setCurrentTime(parseInt(currentTime));
}

playerEl.on('timeupdate', currentTrottledTime);