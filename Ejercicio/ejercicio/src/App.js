import React, { Component } from 'react';
//import React, {componenets} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
import 'popper.js'
import './App.css';

//components
import Navbar from './componenets/Navbar';
import Card from './componenets/Card';
import Form from './componenets/Form';



class App extends Component{

constructor(){
super();
this.state = {
message: "Bienvenido a mi APP de React"
}

}

componentDidMount(){
console.log('Este es el DId Mount');


}

render(){
  return (
    <div className="App">
     
<Navbar/>
<Card/>
<Form/>



    </div>
  
  )


} 

}
export default App;