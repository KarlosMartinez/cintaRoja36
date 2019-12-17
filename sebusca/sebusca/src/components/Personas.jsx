import React, {Component, Fragment} from 'react';
import Card from './Cards';



class Personas extends Component {
    constructor(props){
super(props);


   
    this.state = {
        Personas: [
        {id:1, name: 'Persona1', apellido: 'Apellido1', edad:'01', ubicacion: 'MX', lat:'19.417715', lng:'-99.162264'   },
        {id:2, name: 'Persona2', apellido: 'Apellido2', edad:'02', ubicacion: 'Mx', lat:'20.611508', lng:'-100.306410'   },
        {id:3, name: 'Persona3', apellido: 'Apellido3', edad:'03', ubicacion: 'Mx', lat:'19.420584', lng:'-99.143731'   },
        {id:4, name: 'Persona4', apellido: 'Apellido4', edad:'04', ubicacion: 'Mx', lat:'25.879967', lng:'-97.504050'   },
        {id:5, name: 'Persona5', apellido: 'Apellido5', edad:'05', ubicacion: 'Mx', lat:'16.795846', lng:'-93106388'   },
        {id:6, name: 'Persona6', apellido: 'Apellido6', edad:'06', ubicacion: 'Mx', lat:'23.278988', lng:'-106.448652'   }
        ]
    }
    }
    render (){

        let {Personas} = this.state;
        console.log(Personas);
return( 
   
    <div>
       {this.state.Personas.map( Cards =>(
           <Card  key ={Personas.id} 
           Cards={Cards}/>
       ))}
        

    </div>
//  <h1>Lista de Personas Desaparecidas</h1>
 
);
    }

}

export default Personas;