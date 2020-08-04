import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';

//  <a href="{video.url}">Clique no link</a>
//  import logo from '../../../assets/youtube_logo.jpg';

function ConsultaVideo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/videos'
      : 'https://philgflix.herokuapp.com/videos';
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
        <tr><Link to="video/crud">Novo</Link></tr>
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
          <th>
            {' '}
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
            <td>
              <Link to="/pages/boss">Editar</Link>
            </td>
          </tr>
        ))}
      </table>
    </DefaultPage>
  );
}

export default ConsultaVideo;
