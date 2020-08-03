import config from '../config';

const URL_CATEGORIAS_VIDEOS = `${config.URL_BANCKEND}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIAS_VIDEOS)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Ops! Não foi possível obter lista de vídeos e categorias.');
    });
}

export default {
  getAllWithVideos,
};
