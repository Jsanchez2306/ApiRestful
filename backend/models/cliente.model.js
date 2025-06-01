const moongose = require('../config/database.js');

const schemaClientes = new moongose.Schema(
    {
        Documento: {
            type: String,
            required: [true, 'El documento es obligatorio'],
            minleghth: [7, 'El documento debe tener al menos 7 caracteres'],
            maxlength: ['10, El documento no puede tener más de 10 caracteres']
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

const clientes = moongose.model('clientes', schemaClientes);
module.exports = clientes;
  