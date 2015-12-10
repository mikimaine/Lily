import { ONLINE, OFFLINE } from './../constants/constants';

function connection(state = window.navigator.onLine, action) {
  switch(action.type) {
    case ONLINE:
      return true;
    break;

    case OFFLINE:
      return false;
    break;

    default:
      return state;
    break;
  }
}

module.exports = connection;