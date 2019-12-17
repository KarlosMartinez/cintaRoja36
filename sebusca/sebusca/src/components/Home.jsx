import React, {Component} from 'react';

function Home (props){

    console.log(props);

    return (

        <div>
<h1 style={{ height: '10vh', width: '100%' }}>{props.titulo}</h1>
        </div>
    )
}

export default Home;