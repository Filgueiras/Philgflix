import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Menu />

        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"HAL 9000, vilão de 2001-Uma odisséia no espaço, conta sobre o bug do milênio"}
        />

        <Carousel
          ignoreFirtVideo
          category={dadosIniciais.categorias[0]}
        />
    </div>
  );
}

export default App;
