import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import './categoria.css';

function ConsultaCategoria() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://philgflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <DefaultPage>
      <h1>
        Listagem de Categorias
      </h1>

      {categorias.length === 0 && (
      <div>
        Buscando dados de categorias existentes...
      </div>
      )}
      <table className="table">
        <tr className="novo"><Link to="categoria/crud">Novo</Link></tr>
        <tr>
          <th>
            Id
          </th>
          <th>
            Nome
          </th>
          <th>
            Descrição
          </th>
          <th>
            Cor
          </th>
          <th>
            {' '}
          </th>
        </tr>
        {categorias.map((categoria) => (
          <tr key={`${categoria.id}`}>
            <td>
              {categoria.id}
            </td>
            <td>
              {categoria.nome}
            </td>
            <td>
              {categoria.descricao}
            </td>
            <td>
              {categoria.cor}
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

export default ConsultaCategoria;
