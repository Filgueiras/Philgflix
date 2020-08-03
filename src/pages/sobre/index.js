import React from 'react';

import DefaultPage from '../../components/DefaultPage';

function Sobre() {
  return (
    <DefaultPage>
      <h1>Sobre o Philg Flix</h1>
      <p>
        Olá! Sou Marco Filgueiras e agradeço por sua visita ao "Philg Flix" (e por querer saber mais sobre a página).
        Para começar, "Philg" é só um jeito de abreviar "Filgueiras", parte de meu sobrenome (o outro nome é Guimarães,
        mas é muito mais comum e, para falar a verdade, achei que "Guima Flix" ia ficar bem estranho, rs).
      </p>
      <p>
        Esta página é fruto do esforço de acompanhar a Imersão React da Alura (como indicado no rodapé) e "cair de cabeça"
        neste mundo "javascript everywhere" e da web. Como este é o primeiro projeto com React da minha carreira, tive que
        humildemente limitar o escopo para algo que coubesse no tempo da Imersão.
      </p>
      <p>Enfim, este é o primeiro de muitos projetos... E, se quiser se conectar, fique à vontade:</p>
      <p>https://www.linkedin.com/in/marcofilgueiras/</p>
      <p>https://github.com/Filgueiras/Philgflix</p>
      <p>https://twitter.com/marcofilgueiras</p>
    
    </DefaultPage>
  );
}

export default Sobre;

// <li>
// <ol><a href="https://twitter.com/omariosouto" target="_blank" className="instructor__socials__twitter" /></ol>
// <ol><a href="https://www.instagram.com/omariosouto/" target="_blank" className="instructor__socials__instagram" /></ol>
// <ol><a href="https://www.linkedin.com/in/omariosouto/" target="_blank" className="instructor__socials__linkedin" /></ol>
// </li>
//  <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />;
