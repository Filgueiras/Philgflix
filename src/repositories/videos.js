// import config from '../config';
const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://philgflix.herokuapp.com';

const URL_VIDEOS = `${URL_BACKEND}/videos`;