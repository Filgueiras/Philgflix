import React, { useState, useEffect } from 'react';
import './home.css';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  const [categoriasVideos, setCategoriasVideos] = useState([]);

  // ============ função iniciada com "use" é condição para funcionar o Custom Hook!
  useEffect(() => {
    console.log('Entrei na rotina');
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias?_embed=videos'
      : 'https://philgflix.herokuapp.com/categorias?_embed=videos';
    fetch(URL)
      .then(async (respostaDoServer) => {
        console.log('Fazendo requisição para o Heroku (async)');
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategoriasVideos(resposta);
          console.log('Servidor disse que OK (async)');
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    console.log('Fim do use effect');
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Anúncio da Apple na final do Super Bowl 1999. O vilão de 2001, uma odisséia no espaço, fala do Bug do Milênio e de como Dave gosta mais do Mac do que dele."
      />

      {categoriasVideos.length === 0 && (
      <div className="loading">
        Conectando ao servidor Philg Flix...
        (calma que a gente é humilde e tem servidor free)

      </div>
      )}

      {categoriasVideos.map((escrever) => (

        <Carousel
          category={escrever}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Home;
