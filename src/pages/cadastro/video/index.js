import React, { useState, useEffect } from 'react';
import DefaultPage from '../../../components/DefaultPage';

//  import logo from '../../../assets/youtube_logo.jpg';

function ConsultaVideo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const URL = 'https://philgflix.herokuapp.com/videos';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setVideos(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <DefaultPage>
      <h1>
        Listagem de Vídeos
      </h1>

      {videos.length === 0 && (
      <div>
        Buscando dados de Vídeos existentes...
      </div>
      )}
      <table className="table">
        <tr>
          <th>
            Id V&iacute;deo
          </th>
          <th>
            Id Categoria
          </th>
          <th>
            T&iacute;tulo
          </th>
          <th>
            URL
          </th>
        </tr>
        {videos.map((video) => (
          <tr key={`${video.id}`}>
            <td>
              {video.id}
            </td>
            <td>
              {video.categoriaId}
            </td>
            <td>
              {video.titulo}
            </td>
            <td>
              {video.url}
            </td>
          </tr>
        ))}
      </table>
    </DefaultPage>
  );
}

export default ConsultaVideo;