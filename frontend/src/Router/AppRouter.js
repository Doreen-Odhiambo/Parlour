import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from'../components/AboutUs';
import Client from '../components/client';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Services from '../components/Services';
import Header from '../components/header'


const AppRouter = () =>{
  return (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact path = "/" component ={Home} />
            <Route  path = "/Services" component ={Services} />
            <Route  path = "/AboutUs" component ={AboutUs} />
            <Route  path = "/Contact" component ={Contact} />
            <Route  path = "/client" component ={Client} />
            
        </Switch>
    </div>
    </BrowserRouter>
  )
}

export default AppRouter;