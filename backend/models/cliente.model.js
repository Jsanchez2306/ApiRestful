const mongoose = require('../config/database.js');

const schemaClientes = new mongoose.Schema(
    {
        Documento: {
            type: String,
            required: [true, 'El documento es obligatorio'],
            minlength: [7, 'El documento debe tener al menos 7 caracteres'],
            maxlength: [10, 'El documento no puede tener más de 10 caracteres']
        },
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
            minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
            maxlength: [150, 'El nombre no puede tener más de 150 caracteres']
        },

        fechaNacimiento: {
            type: Date,
            max: Date.now
        }
   }
);

versionKey = false;

const clientes = mongoose.model('clientes', schemaClientes);
module.exports = clientes;
  