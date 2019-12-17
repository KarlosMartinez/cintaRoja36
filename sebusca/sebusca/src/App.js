import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
import 'popper.js';
import './App.css';
//import {Map, GoogleApiWrapper} from 'google-maps-react';

//components
import Home from './components/Home'
import Navbar from './components/Navbar'
//import Card  from './components/Cards'
import Carr from './components/carr'
import Personas from './components/Personas'
//import Mapas from './components/Mapas'
import  SimpleMap from './components/Mapas'




class App extends Component {
  contructor (){
    //super()
    this.state = {
      message: 'Se Busca'
    }
  }
  render (){
  return (
    <div>
      <Navbar/>

      <Home 
      titulo='Se Busca'
      />
  
      <Carr/>
      <SimpleMap/>

      <Personas/>
      
      
 

    </div>
 );
  }
}

export default App;
