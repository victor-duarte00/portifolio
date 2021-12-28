import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from './sub'
import Home from './containers/home';
import Projects from './containers/projects'
import Contacts from'./containers/contacts'


function Routes() {

    return (
        
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projetos" component={Projects} />
                <Route exact path="/contatos" component={Contacts} />
            </Switch>
        </Router>
    )
}

export default Routes