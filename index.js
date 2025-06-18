require('./config/database');
const Cliente = require('./models/cliente.modelo');
const Producto = require('./models/producto.modelo');
const Empleado = require('./models/empleado.modelo');

const exp = require('express');
const app = exp();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.find();

    if (clientes) {
        res.status(200).json(clientes);
    } else {
        res.status(500).json({ mensaje: 'Error al obtener los clientes' });
    }
});

app.get('/productos', async (req, res) => {
    const productos = await Producto.find();

    if (productos) {
        res.status(200).json(productos);
    } else {
        res.status(500).json({ mensaje: 'Error al obtener los productos' });
    }
});

app.get('/empleados', async (req, res) => {
    const empleados = await Empleado.find();

    if (empleados) {
        res.status(200).json(empleados);
    } else {
        res.status(500).json({ mensaje: 'Error al obtener los empleados' });
    }
});

app.post('/clientes', async (req, res) => {
    const nuevoCliente = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    };

    let inserccion = await Cliente.create(nuevoCliente)
    if (inserccion) {
        res.status(201).json({
            mensaje: 'Cliente creado exitosamente',
            cliente: inserccion
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al crear el cliente'
        });
    }
}
);

app.post('/productos', async (req, res) => {
    const nuevoProducto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        stock: req.body.stock
    };

    let inserccion = await Producto.create(nuevoProducto);
    if (inserccion) {
        res.status(201).json({
            mensaje: 'Producto creado exitosamente',
            producto: inserccion
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al crear el producto'
        });
    }
});

app.post('/empleados', async (req, res) => {
    const nuevoEmpleado = {
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        email: req.body.email,
        telefono: req.body.telefono,
        salario: req.body.salario
    };

    let inserccion = await Empleado.create(nuevoEmpleado);
    if (inserccion) {
        res.status(201).json({
            mensaje: 'Empleado creado exitosamente',
            empleado: inserccion
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al crear el empleado'
        });
    }
});

app.put('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    const actualizacion = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion
    };
    let actualizacionCliente = await Cliente.findByIdAndUpdate(id, actualizacion, { new: true });
    if (actualizacionCliente) {
        res.status(200).json({
            mensaje: 'Cliente actualizado exitosamente',
            cliente: actualizacionCliente
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al actualizar el cliente'
        });
    }
});

app.put('/productos/:id', async (req, res) => {
    const id = req.params.id;
    const actualizacion = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        stock: req.body.stock
    };
    let actualizacionProducto = await Producto.findByIdAndUpdate(id, actualizacion, { new: true });
    if (actualizacionProducto) {
        res.status(200).json({
            mensaje: 'Producto actualizado exitosamente',
            producto: actualizacionProducto
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al actualizar el producto'
        });
    }
});

app.put('/empleados/:id', async (req, res) => {
    const id = req.params.id;
    const actualizacion = {
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        email: req.body.email,
        telefono: req.body.telefono,
        salario: req.body.salario
    };
    let actualizacionEmpleado = await Empleado.findByIdAndUpdate(id, actualizacion, { new: true });
    if (actualizacionEmpleado) {
        res.status(200).json({
            mensaje: 'Empleado actualizado exitosamente',
            empleado: actualizacionEmpleado
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al actualizar el empleado'
        });
    }
});

app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    let eliminacion = await Cliente.findByIdAndDelete(id);
    if (eliminacion) {
        res.status(200).json({
            mensaje: 'Cliente eliminado exitosamente',
            cliente: eliminacion
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al eliminar el cliente'
        });
    }
});

app.delete('/productos/:id', async (req, res) => {
    const id = req.params.id;
    let eliminacion = await Producto.findByIdAndDelete(id);
    if (eliminacion) {
        res.status(200).json({
            mensaje: 'Producto eliminado exitosamente',
            producto: eliminacion
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al eliminar el producto'
        });
    }
});

app.delete('/empleados/:id', async (req, res) => {
    const id = req.params.id;
    let eliminacion = await Empleado.findByIdAndDelete(id);
    if (eliminacion) {
        res.status(200).json({
            mensaje: 'Empleado eliminado exitosamente',
            empleado: eliminacion
        });
    } else {
        res.status(500).json({
            mensaje: 'Error al eliminar el empleado'
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});