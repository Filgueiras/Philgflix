import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const valoresIniciais = {
    categoria: '',
    titulo: '',
    url: '',
  };

  const [videos, setVideos] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: categoria, titulo, url
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('titulo'),
      infosDoEvento.target.value,
    );
  }

  // ============

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/videos';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setVideos(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <DefaultPage>
      <h1>
        Cadastro de Video:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setVideos([
          ...videos,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <Button type="submit">
          Confirmar
        </Button>
      </form>

    </DefaultPage>
  );
}

export default CadastroVideo;
