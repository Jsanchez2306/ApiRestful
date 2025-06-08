const exp = require('express');
const app = exp();
require('dotenv').config();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

const modeloClientes = require('./backend/models/cliente.model');

app.post('/regcliente', (req, res) => {
  const nuevoCliente = new modeloClientes({
    Documento: '1025647049',
    nombre: 'Evelyn',
    fechaNacimiento: new Date('2006-04-23')
  });
  
  nuevoCliente.save()
    .then(clienteGuardado => {
      res.status(201).json(clienteGuardado);
    })
    .catch(error => {
      console.error('Error al guardar el cliente:', error);
      res.status(400).json({ error: 'Error al guardar el cliente' });
    });
});

app.get('/clientes', async (req, res) => {
  try {
    const listaClientes = await modeloClientes.find();
    res.json(listaClientes); 
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor en línea en el puerto " + PORT);
});
