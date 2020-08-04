import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DefaultPage from '../../../../components/DefaultPage';
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';

function CadastroVideo() {
  const historico = useHistory();
  const valoresIniciais = {
    categoria: '',
    titulo: '',
    url: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [videos, setVideos] = useState([]);

  // ============ função iniciada com "use" é condição para funcionar o Custom Hook!
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
        Cadastro de Video:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setVideos([
          ...videos,
          values,
        ]);

        historico.push('/cadastro/video');
      }}
      >

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <Button type="submit">
          Confirmar
        </Button>
      </form>

      {videos.length === 0 && (
      <div>
        Buscando dados...
      </div>
      )}

    </DefaultPage>
  );
}

export default CadastroVideo;
