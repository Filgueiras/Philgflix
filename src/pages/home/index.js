import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  //  const [categoriasVideos, setCategoriasVideos] = useState([]);

  // ============ função iniciada com "use" é condição para funcionar o Custom Hook!

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Anúncio da Apple na final do Super Bowl 1999. O vilão de 2001, uma odisséia no espaço, fala do Bug do Milênio e de como Dave gosta mais do Mac do que dele."
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
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
