const request = require ('request');

const url_base =  'https://goodreads-devf-aaron.herokuapp.com/api/v1';

function crearAuthor(nombre, apellidos, nacionalidad,biografia, genero, edad){


    const URI = 'authors/';

    let url_final = `${url_base}/${URI}`;



    let jsonSend = {
        "name": nombre,
        "last_name": apellidos,
        "nacionalidad": nacionalidad,
        "biography": biografia,
        "gender": genero,
        "age": edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: url_final, form: jsonSend }, (err, response, body) => {
            let json = JSON.parse(body);
           // console.log(json);
            response.statusCode == 201
            //console.log(response.statusCode)
                ? resolve(json)
                : reject('Error al crear un nuevo autor');
        })
    })
}

crearAuthor ("pepe", "perez", "MX", "bio primera", "M", 53)
.then ((nuevoAutor) => console.log(nuevoAutor))
.catch(error => console.log (error))
