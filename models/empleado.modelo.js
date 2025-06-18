const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono : { type: String, required: true },
    salario: { type: Number, required: true }
}, { versionKey: false }
);

const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;
