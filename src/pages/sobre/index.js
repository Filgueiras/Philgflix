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
      <p>
        Os termos "Limitar o escopo" e "humildemente" na mesma frase resultam no famoso "fiz o que dava no prazo que eu tinha" 
        (e com conhecimento e tempo disponível da época). Devo fazer ajustes "Pós Imersão", mas talvez mantenha a página intacta para 
        fazer um benchmark de conhecimento (avisarei aqui se houver uma nova página em outro endereço). 
      </p>
      <p class="ouch">.</p>
      <p>Enfim, este é o primeiro de muitos projetos... E, se quiser se conectar, fique à vontade:</p>
      <p class="ouch">.</p>
      <p class="linkedin"><a href="https://www.linkedin.com/in/marcofilgueiras/">LinkedIn</a></p>
      <p class="github"><a href="https://github.com/Filgueiras/Philgflix">Github (repo deste projeto)</a></p>
      <p class="twitter"><a href="https://twitter.com/marcofilgueiras">Twitter</a></p>
      <p class="instagram"><a href="https://www.instagram.com/marcofilgueiras/">Instagram</a></p>
      <p class="ouch">.</p>
      <p>Você já percebeu que sou "newbie" em React, mas sou certificado SAS e MBA em Data Science pela FIAP.
        Se quiserem saber mais ou "trocar conhecimento" sobre os assuntos, será uma grande satisfação.
      </p>

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
