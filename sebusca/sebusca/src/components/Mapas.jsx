import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Personas from './Personas' 
const Coordenadas = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.6345005,
      lng: -102.5527878
    },
    zoom: 5,
    desaparecidos : {Personas}
  };
 constructor(props){
     super(props);
 }
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCnRYqv5X7-37Qn98hzWW2YOyy3k9Z_Vts' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>

        <Personas lat={19.418049} lng={-99.162232} text={Personas.id}/>
   
          <Coordenadas
            lat={3.278988}
            lng={-106.448652}
            text="Mexico"
          />

         
         
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;

/*
import React, {Component, Fragment} from 'react';

import {Map, GoogleApiWrapper} from 'react-google-maps'





class Mapas extends Component {

   
    render () {


        
return( 

    <Map google={this.PaymentResponse.google}
    zoom={8}
  //  style={mapStyles}
    initialCenter={{lat: 23.6345005, lng: -102.5527878}}
    />
    
);
    }
}

export default GoogleApiWrapper ({
    apikey: 'AIzaSyCnRYqv5X7-37Qn98hzWW2YOyy3k9Z_Vts'

}) (Mapas)
//export default Mapas;

*/