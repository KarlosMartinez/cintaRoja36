const request = require('request');

const url_base =  'https://goodreads-devf-aaron.herokuapp.com/api/v1';

const id_autor = (id) => {


request.get(`${url_base}/authors/${id}`, (error, respons, body) => {

    const autor = JSON.parse(body);
    console.log (respons.statusCode);
    console.log(autor);
})

}