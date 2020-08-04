import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DefaultPage from '../../../../components/DefaultPage';
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import videosRepository from '../../../../repositories/videos';
import categoriasRepository from '../../../../repositories/categorias';

function CadastroVideo() {
  const historico = useHistory();
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    categoria: 'Outras coisas por aí',
    titulo: '',
    url: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);
  const [videos, setVideos] = useState([]);

  // ============ função iniciada com "use" é condição para funcionar o Custom Hook!
  useEffect(() => {
    categoriasRepository
      .getCategorias()
      .then((categoriasRecuperadas) => {
        setCategorias(categoriasRecuperadas);
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

        const categoriaEscolhida = categorias.find((categoria) => categoria.nome === values.categoria);

        if (values.url.length > 0) {
          videosRepository.addVideo({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              console.log('Novo dado inserido.');
              historico.push('/cadastro/video');
            });
        } else {
          alert('Dados obrigatórios não preenchidos');
        }
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
