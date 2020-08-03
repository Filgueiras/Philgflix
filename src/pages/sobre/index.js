import React from 'react';
import DefaultPage from '../../components/DefaultPage';
import './sobre.css';

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
        neste mundo "javascript everywhere" que é a web de hoje. Como este é o primeiro projeto com React da minha vida, tive que
        humildemente limitar o escopo para algo que coubesse no tempo da Imersão (tive que relembrar CSS e não domino Javascript).
      </p>
      <p>
        Os termos "Limitar o escopo" e "humildemente" na mesma frase, para alguém que não desenvolvia para web, significam
        "fiz o que dava no prazo que eu tinha"
        (e com conhecimento da época).
        Devo fazer ajustes "Pós-Imersão" nesta página, mas talvez a mantenha intacta para
        fazer um benchmark de conhecimento (avisarei aqui se houver uma nova página em outro endereço).
      </p>
      <p className="ouch">.</p>
      <p>Enfim, este certamente é o primeiro de muitos projetos... O que achei mais interessante foi a integração
        entre Github, Vercel (front-end) e Heroku (back-end). 
        Bom, isso foi sobre a conexão de códigos, mas se quiser conectar experiências e ideias, fique à vontade para me procurar:</p>
      <p className="ouch">.</p>
      <p className="linkedin"><a href="https://www.linkedin.com/in/marcofilgueiras/">LinkedIn</a></p>
      <p className="github"><a href="https://github.com/Filgueiras/Philgflix">Github (repo deste projeto)</a></p>
      <p className="twitter"><a href="https://twitter.com/marcofilgueiras">Twitter</a></p>
      <p className="instagram"><a href="https://www.instagram.com/marcofilgueiras/">Instagram</a></p>
      <p className="ouch">.</p>
      <p>
        Você já percebeu que sou "newbie" em React, mas sou certificado SAS (SAS® Certified Specialist: Base SAS 9.4 e 
        SAS® Certified Professional: Advanced Programming Using SAS® 9.4) e MBA em Data Science pela FIAP.
        Assim, se quiser saber mais sobre estes assuntos ou "trocar conhecimento", será uma grande satisfação.
      </p>
      <p>
        Eu não era muito adepto de tecnologias Open Source até estudar as soluções para Big Data da Apache, da Hortonworks
        (hoje Cloudera, com quem se fundiu) e, na verdade, antes de ver o quanto de coisa boa que saiu destas iniciativas
        (ok, o Linux sempre foi interessante, mas complicado de usar para algumas finalidades não-acadêmicas).
        Enfim, hoje as iniciativas Open e as comunidades que as envolvem são o que tem de mais valioso no mundo da
        tecnologia e, por isso, não vou mais ficar de fora desta realidade.
      </p>
      <p>
        Parabéns à Alura pela iniciativa e obrigado aos instrutores da Imersão: Marco Bruno, Juliana Negreiros
        e Mario Souto, por partilhar o conhecimento. Claro que não posso deixar de fora o "eterno professor"
        Paulo Silveira, com quem já tive aulas de Java nos cursos de Verão da USP e de quem sou cliente antigo, seja
        pela Caelum, seja pela Alura.
      </p>
      <p className="ouch">.</p>
      <p>Links que me ajudaram a resolver alguns problemas + alguns que podem ser úteis em breve, rsrs</p>
      <p className="ouch">.</p>
      <p><a href="https://reactrouter.com/web/example/nesting">Rotear páginas do React (SPA: novas páginas e 404)</a></p>
      <p><a href="https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76">Problema da página 404 com jogo (Canvas e React) Nota: não resolvi, mas sei o trabalho que dá por aqui, rsrs.</a></p>
      <p><a href="https://github.com/typicode/json-server">Json-Server: página do Git</a></p>
      <p><a href="https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d"> Um pouco mais de informação sobre Json-Server </a></p>
      <p><a href="https://jsonformatter.org/">Validador de arquivos Json</a></p>
      <p><a href="https://gist.github.com/omariosouto/643616a1f923b3350675b643cccb462a">Super-referências da Ju, Marco e Mario</a></p>
      <p><a href="https://httpstatusdogs.com/">Não ajudou em nada, mas é interessante: Cães e códigos de status HTTP </a></p>
      <p><a href="https://momentjs.com/">Queria uma desculpa para usar, mas não deu tempo: API Moment JS</a></p>
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
