import React from 'react';
import{NavLink} from "react-router-dom";
 import './styles/header.css';
// import '\src\components\header.css';

const header=() =>{
  
  return (

    <div>
      
        <NavLink to = "/" activeClassName = "is-active" exact ={true}>  Home </NavLink>
        <NavLink to = "/Services" activeClassName = "is-active"> Services</NavLink>
        <NavLink to = "/client" activeClassName = "is-active" >Client</NavLink>
        <NavLink to = "/Contact" activeClassName = "is-active" > Contact</NavLink>
        <NavLink to = "/AboutUs" activeClassName = "is-active"> AboutUs </NavLink>
        
        
        </div>
    
  

  );
};

export default header;