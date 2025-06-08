const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    nombre: {
        required: [true, 'El nombre es obligatorio'],
        type: String,
    },
    descripcion: {
        required: [true, 'La descripcion es obligatoria'],
        type: String,
    },
    precio: {
        required: [true, 'El precio es obligatorio'],
        type: Number,
    },
    stock: {
        required: [true, 'El stock es obligatorio'],
        type: Number,
    },
});

const productos = mongoose.model("producto", schemaProductos);
module.exports = productos;