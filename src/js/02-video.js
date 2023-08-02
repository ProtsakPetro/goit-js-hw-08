import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

//* замість коду нижче додав player.setCurrentTime(currentTime || 0);
//player
//   .setCurrentTime(currentTime)
//   .then(function (seconds) {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;

//       default:
//         break;
//     }
//   });
//*оптимізував код як порадив ментор
player.setCurrentTime(currentTime || 0);
player.on('timeupdate', throttle(onTime, 1000));
