import * as ROT from 'rot-js';
import {constants} from '../lib/constants';

export const initUi = function() {
  
  // init rot.js <canvas> display for level map
  const mapDisplay = new ROT.Display({
    width: constants.MAP_WIDTH,
    height: constants.MAP_HEIGHT,
    fontFamily: 'metrickal, monospace',
    fontSize: 16,
  }); 
  document.querySelector('#map_mount').appendChild(mapDisplay.getContainer());

  const messageLogMount = document.querySelector('#message_log_mount');

  return [
    mapDisplay,
    messageLogMount,
  ];
};