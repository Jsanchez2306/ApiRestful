const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String },
    stock: { type: Number, default: 0 }
}, { versionKey: false }
);

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
