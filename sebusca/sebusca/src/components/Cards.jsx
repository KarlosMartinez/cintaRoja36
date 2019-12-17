import React, {Component} from 'react';
//import Personas from './Personas';

//import CardGroup from 'react-bootstrap/CardGroup'




const Cards = ({Cards}) =>{

return (
   
   <div className="card-group">
       
<div className="card width=100%  d-flex justify-content-space-around" style={{ height: '50vh', width: '50%' }} >
  <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj7j7Kbu7vmAhVOIKwKHa5CD-oQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.freepik.es%2Fvector-gratis%2Fcartel-western-busca_1015657.htm&psig=AOvVaw13Bhr8ImX2CwtgMBXdRiAt&ust=1576630149938535" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nombre: {Cards.name} {Cards.apellido}</h5>
    <p className="card-text">Edad: {Cards.edad}</p>
    <p className="card-text">Ubicacion {Cards.ubicacion}</p>
    <a href="#" className="btn btn-primary">Información</a>
  </div>
</div>
   </div> 




);
}





export default Cards;