require('./config/database');
const Cliente = require('./models/cliente.modelo');
const Producto = require('./models/producto.modelo');
const Empleado = require('./models/empleado.modelo');
const path = require('path');
const exp = require('express');
const app = exp(); 

const logger = require('morgan');
app.use(logger('dev'));
app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views/'));

app.get('/', (req, res) => {
    res.render("pages/about")
});

const controladorCliente = require('./controller/cliente.controller');

app.get('/listar', (req, res) => {
    const listado = controladorCliente.consultar(req, res);
    res.render("pages/index") 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});