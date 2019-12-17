const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const seBusca = new Schema ({

    nombre:{
        type:String,
        require: true
    },

    apellidoPaterno:{
    type:String,
    require: true
    },

    apellidoMaterno:{
        type:String,
        require: true
    },

    edad:{
        type:Number,
        require: true
    },

    ubicacion:{
        type:String,
        require:true
    },
   
},
{timestamps: true}
)

const Project = mongoose.model('project', seBusca)

module.exports = Project;