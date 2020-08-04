// import config from '../config';
const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://philgflix.herokuapp.com';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function getVideos() {
  console.log(URL_VIDEOS);
  return fetch(`${URL_VIDEOS}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível obter os dados de vídeos.');
    });
}

function addVideo(novoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(novoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi adicionar o novo vídeo.');
    });
}
export default {
  getVideos,
  addVideo,
};
