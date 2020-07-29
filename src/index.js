import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//tive que fazer npm install antes
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/> //exact tira o "like" da busca no nome da página
      <Route path="/cadastro/video/" component={CadastroVideo} />
      // Se nada mais der certo, o último route é o erro 404
      <Route component={() => (<div>Erro 404: esta página não foi encontrada. :-(</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
