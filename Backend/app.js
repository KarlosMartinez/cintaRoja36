const express = require('express');
require('dotenv').config();


const mongoose = require('mongoose');

mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {

    if (err) throw err;
    console.log("Mongo Conectado a la base de Datos");
})


const app = express();
app.use(express.json());

const Project = require('./server/controllers/Models/projects');

app.get ('/', (req, res) => {

    res.send('<h1>SERVER</h1>');
})

app.post('/new/project', (req, res) => {

    let params = req.body;
    console.log(params);
    let newProject = new Project({
        nombre: params.nombre,
        apellidoPaterno: params.apellidoPaterno,
        apellidoMaterno: params.apellidoMaterno,
        edad: params.edad,
        ubicacion: params.ubicacion
    });
newProject.save((err, Project) =>{
        if(err){
            res.status(400).json({message: "error al crear nueva Store"});
        }
        res.status(200).json({message: Project});

    })
})
app.listen (process.env.PORT, () => {

    console.log("Servidor corriendo en servidor:"+ process.env.PORT);
})