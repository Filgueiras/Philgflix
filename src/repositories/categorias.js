// import config from '../config';
const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://philgflix.herokuapp.com';

const URL_CATEGORIAS = `${URL_BACKEND}/categorias`;

function getCategoriasComVideos() {
  console.log(URL_CATEGORIAS);
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível obter os dados de categorias e vídeos.');
    });
}

export default {
  getCategoriasComVideos,
};
