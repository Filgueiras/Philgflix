import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/DefaultPage';


function CadastroCategoria() {

  const [nomeDaCategoria, setNomeDaCategoria] = useState('Dummy');



  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria} </h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            defaultValue={nomeDaCategoria}
            onChange={
              function funcaoHandler(dadosEvento) {
                //console.log('[nomeDaCategoria]', nomeDaCategoria);
                //console.log('[dadosEvento.target]', dadosEvento.target.value);
                setNomeDaCategoria(dadosEvento.target.value);
              }
            } 
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;