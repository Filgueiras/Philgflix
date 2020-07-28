import React from 'react';
import Logo from '../../assets/PhilgFlixLogo-blue.png';
import './menu.css';
//import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Philg Flix logo"></img>
            </a>

            <Button as='a' className="Button" href="/">
                Clique aqui
            </Button>
        </nav>
    );
}

export default Menu;