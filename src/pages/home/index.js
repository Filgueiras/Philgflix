import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL_Categorias = 'http://localhost:8080/categorias';

      fetch(URL_Categorias)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível recuperar as categorias');
        });

      const URL_Videos = 'http://localhost:8080/videos';

      fetch(URL_Videos)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setVideos(resposta);
            return;
          }
          throw new Error('Não foi possível recuperar os vídeos');
        });
    }
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Anúncio da Apple na final do Super Bowl 1999. O vilão de 2001, uma odisséia no espaço fala do Bug do Milênio e de como Dave gosta mais do Mac do que dele."
      />
      {/*
      {categorias.map((categorias) => (

        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        />

      ))}

      {videos.map((video) => (
        <li key={`${video.id}`}>
          {video.titulo}
        </li>
      ))} */}

      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      /> 

      <Footer />
    </div>
  );
}

export default Home;
