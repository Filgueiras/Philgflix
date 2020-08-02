import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/PhilgFlixLogo.png';
import './menu.css';
import Button from '../Button';

// com Link, href vira 'to'
function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Philg Flix logo" />
      </Link>

      <Button as={Link} className="Button" to="/cadastro/video">
        Vídeos
      </Button>
      <Button as={Link} className="Button" to="/cadastro/categoria">
        Categorias
      </Button>
    </nav>
  );
}

export default Menu;
