import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DefaultPage from '../../../../components/DefaultPage';
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import categoriasRepository from '../../../../repositories/categorias';

function CadastroCategoria() {
  const historico = useHistory();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: 'red',
  };

  const { handleChange, values } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  // ============

  return (
    <DefaultPage>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        if (values.nome.length > 0 && values.cor.length > 0 && values.nome.length > 0) {
          categoriasRepository.addCategoria({
            nome: values.nome,
            descricao: values.descricao,
            cor: values.cor,
          })
            .then(() => {
              console.log('Novo dado inserido.');
              historico.push('/cadastro/categoria');
            });
        } else {
          alert('Dados obrigatórios não preenchidos');
        }

        historico.push('/cadastro/categoria');
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Confirmar
        </Button>

      </form>

    </DefaultPage>
  );
}

export default CadastroCategoria;
