import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <div>
        <Button as={Link} className="Button" to="/cadastro/video">
          Vídeos
        </Button>
        <Button as={Link} className="Button" to="/cadastro/categoria">
          Categorias
        </Button>
      </div>
      <div>
        <p />
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        </a>
        <p>
          Criado, orgulhosamente, por Marco Filgueiras durante a
          {' '}
          <a href="https://www.alura.com.br/imersao-react/aula02-roteamento-state">
            Imersão React da Alura
          </a>
        </p>
      </div>
    </FooterBase>
  );
}

export default Footer;
