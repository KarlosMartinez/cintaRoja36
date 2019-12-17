import React from 'react';
//import b1 from './src/assets/img/SB1.jpg';


function Carr (props){
    console.log(props)
    return(
        <div style={{ height: '60vh', width: '100%', border:'solid 1px' }}>
             
  


<div id="carouselExampleControls" className="carousel slide  align-item-center" data-ride="carousel" style={{ height: '60vh', width: '100%', border:'solid 1px'   }}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://i.imgur.com/pK55386.jpg' className="d-block w-100 object-fit " alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.imgur.com/JQPKXkZ.jpg" className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.imgur.com/Y5XIolT.jpg" className="d-block w-100" alt="img3"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
  </div>
    
    )
}

export default Carr;


