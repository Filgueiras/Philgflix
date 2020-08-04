import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import ConsultaCategoria from './pages/cadastro/categoria';
import ConsultaVideo from './pages/cadastro/video';
import CadastroVideo from './pages/cadastro/video/crud';
import CadastroCategoria from './pages/cadastro/categoria/crud';
import NotFound from './pages/notfound';
import Sobre from './pages/sobre';
import Boss from './pages/boss';

// Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route exact path="/cadastro/video" component={ConsultaVideo} />
      <Route path="/cadastro/video/crud" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={ConsultaCategoria} />
      <Route path="/cadastro/categoria/crud" component={CadastroCategoria} />
      <Route path="/pages/sobre" component={Sobre} />
      <Route path="/pages/boss" component={Boss} />
      <Route path="*" component={NotFound}/> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
