import React from 'react';
import DefaultPage from '../../components/DefaultPage';
import './sobre.css';

function Sobre() {
  return (
    <DefaultPage>
      <h1>Sobre o Philg Flix</h1>
      <p>
        Ol&aacute;! Sou Marco Filgueiras e agradeço por sua visita ao &quot;Philg Flix&quot; (e por querer saber mais sobre a p&aacute;gina).
        Para começar, &quot;Philg&quot; &eacute; s&oacute; um jeito de abreviar &quot;Filgueiras&quot;, parte de meu sobrenome (o outro nome &eacute; Guimar&atilde;es,
        mas &eacute; muito mais comum e, para falar a verdade, achei que "Guima Flix" ia ficar bem estranho, rs).
      </p>
      <p>
        Esta p&aacute;gina &eacute; fruto do esforço de acompanhar a Imers&atilde;o React da Alura (como indicado no rodap&eacute;) e &quot;cair de cabeça&quot;
        neste mundo &quot;javascript everywhere&quot; que &eacute; a web de hoje. Como este &eacute; o primeiro projeto com React da minha vida, tive que
        humildemente limitar o escopo para algo que coubesse no tempo da Imers&atilde;o (tive que relembrar CSS e n&atilde;o domino Javascript).
      </p>
      <p>
        Os termos &quot;Limitar o escopo&quot; e &quot;humildemente&quot; na mesma frase, para algu&eacute;m que n&atilde;o desenvolvia para web, significam
        &quot;fiz o que dava no prazo que eu tinha&quot; (e com conhecimento da &eacute;poca).
        Devo fazer ajustes &quot;P&oacute;s-Imers&atilde;o&quot; nesta p&aacute;gina, mas talvez a mantenha intacta para
        fazer um benchmark de conhecimento (avisarei aqui se houver uma nova p&aacute;gina em outro endereço).
      </p>
      <p className="ouch">.</p>
      <p>
        Enfim, este certamente &eacute; o primeiro de muitos projetos... O que achei mais interessante foi a integraç&atilde;o
        entre Github, Vercel (front-end) e Heroku (back-end).
        Bom, isso foi sobre a conex&atilde;o de c&oacute;digos, mas se quiser conectar experi&ecirc;ncias e ideias, fique &agrave; vontade para me procurar:
      </p>
      <p className="ouch">.</p>
      <p className="linkedin"><a href="https://www.linkedin.com/in/marcofilgueiras/">LinkedIn</a></p>
      <p className="github"><a href="https://github.com/Filgueiras/Philgflix">Github (repo deste projeto)</a></p>
      <p className="twitter"><a href="https://twitter.com/marcofilgueiras">Twitter</a></p>
      <p className="instagram"><a href="https://www.instagram.com/marcofilgueiras/">Instagram</a></p>
      <p className="ouch">.</p>
      <p>
        Voc&ecirc; j&aacute; percebeu que sou &quot;newbie&quot; em React, mas sou
        {' '}
        <a href="https://www.certmetrics.com/SAS/public/candidate_directory_search.aspx">certificado SAS</a>
        {' '}
        (SAS&reg; Certified Specialist: Base SAS 9.4 e
        SAS&reg; Certified Professional: Advanced Programming Using SAS 9.4) e MBA em Data Science pela
        {' '}
        <a href="https://www.fiap.com.br/mba/mba-em-big-data/?gclid=EAIaIQobChMIlOvg6p2B6wIViYeRCh3FJgTwEAAYASAAEgKERfD_BwE">FIAP</a>
        .
        Assim, se quiser saber mais sobre estes assuntos ou &quot;trocar conhecimento&quot;, ser&aacute; uma grande satisfaç&atilde;o.
      </p>
      <p>
        Eu n&atilde;o era muito adepto de tecnologias Open Source at&eacute; estudar as soluç&otilde;es para Big Data da Apache, da Hortonworks
        (hoje Cloudera, com quem se fundiu) e, na verdade, antes de ver o quanto de coisa boa que saiu destas iniciativas
        (ok, o Linux sempre foi interessante, mas complicado de usar para algumas finalidades n&atilde;o-acad&ecirc;micas).
        Enfim, hoje as iniciativas Open e as comunidades que as envolvem s&atilde;o o que tem de mais valioso no mundo da
        tecnologia e, por isso, n&atilde;o vou mais ficar de fora desta realidade.
      </p>
      <p>
        Parab&eacute;ns &agrave; Alura pela iniciativa e obrigado aos instrutores da Imers&atilde;o: Marco Bruno, Juliana Negreiros
        e Mario Souto, por partilhar o conhecimento. Claro que n&atilde;o posso deixar de fora o &quot;eterno professor&quot;
        Paulo Silveira, com quem j&aacute; tive aulas de Java nos cursos de Ver&atilde;o da USP e de quem sou cliente antigo, seja
        pela Caelum, seja pela Alura.
      </p>
      <p className="ouch">.</p>
      <p>Links que me ajudaram a resolver alguns problemas + alguns que podem ser úteis em breve, rsrs</p>
      <p className="ouch">.</p>
      <p><a href="https://reactrouter.com/web/example/nesting">Rotear p&aacute;ginas do React (SPA: novas p&aacute;ginas e 404)</a></p>
      <p><a href="https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76">Problema da p&aacute;gina 404 com jogo (Canvas e React) Nota: n&atilde;o resolvi, mas sei o trabalho que d&aacute; por aqui, rsrs.</a></p>
      <p><a href="https://github.com/typicode/json-server">Json-Server: p&aacute;gina do Git</a></p>
      <p><a href="https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d"> Um pouco mais de informaç&atilde;o sobre Json-Server </a></p>
      <p><a href="https://jsonformatter.org/">Validador de arquivos Json</a></p>
      <p><a href="https://gist.github.com/omariosouto/643616a1f923b3350675b643cccb462a">Super-refer&ecirc;ncias da Ju, Marco e Mario</a></p>
      <p><a href="https://httpstatusdogs.com/">N&atilde;o ajudou em nada, mas minha filha achou &eacute; &quot;fofo&quot; e pode ser &uacute;til: C&atilde;es e c&oacute;digos de status HTTP </a></p>
      <p><a href="https://momentjs.com/">Queria uma desculpa para usar, mas n&atilde;o deu tempo: API Moment JS</a></p>
      <p><a href="https://www.rapidtables.com/web/html/html-codes.html">Caracteres especiais e seus c&oacute;digos HTML</a></p>
      <p><a href="https://styled-components.com/docs/basics#getting-started">Eu queria ter chegado ao acerto de estilos, mas n&atilde;o deu tempo durante a imers&atilde;o...</a></p>
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
