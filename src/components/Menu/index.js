import React from 'react';
import Logo from '../../assets/PhilgFlixLogo.png';
import './menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';

//com Link, href vira 'to'
function Menu(){
    return (
        <nav className="Menu">
            <Link to="/"> 
                <img className="Logo" src={Logo} alt="Philg Flix logo"></img>
            </Link>

            <Button as={Link} className="Button" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;