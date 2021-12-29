import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from './containers/home';
import Projects from './containers/projects'
import Contacts from'./containers/contacts'

import GlobalStyle from './styles/globalStyle'
import Navbar from './sub'



ReactDOM.render(
  <>
    <GlobalStyle />
    <Navbar/>
    <Router>
            <Switch>
              
                <Route exact path="/" component={Home} />
                <Route exact path="/projetos" component={Projects} />
                <Route exact path="/contatos" component={Contacts} />
            </Switch>
        </Router>
  </>,
  document.getElementById('root')
);


