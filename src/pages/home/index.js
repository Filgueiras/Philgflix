import React, { useState, useEffect } from 'react';
import './home.css';
import dadosDestaque from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import DefaultPage from '../../components/DefaultPage';

function Home() {
  const [categoriasMergedVideos, setCategoriasMergedVideos] = useState([]);

  // ============ função iniciada com "use" é condição para funcionar o Custom Hook!
  useEffect(() => {
    categoriasRepository.getCategoriasComVideos()
      .then((categoriasVideos) => {
        setCategoriasMergedVideos(categoriasVideos);
      })
      .catch((erro) => {
        console.log(erro.message); // coisa feia...
      });
  }, []);

  return (
    <DefaultPage paddingAll={0}>

      <BannerMain
        videoTitle={dadosDestaque.categorias[0].videos[0].titulo}
        url={dadosDestaque.categorias[0].videos[0].url}
        videoDescription="Anúncio da Apple na final do Super Bowl 1999. O vilão de 2001, uma odisséia no espaço, fala do Bug do Milênio e de como Dave gosta mais do Mac do que dele."
      />

      {categoriasMergedVideos.length === 0 && (
      <div className="loading">
        Conectando ao servidor Philg Flix...
        (calma que a gente é humilde e tem servidor free)

      </div>
      )}

      {categoriasMergedVideos.map((escrever) => (

        <Carousel
          category={escrever}
        />
      ))}

    </DefaultPage>
  );
}

export default Home;
