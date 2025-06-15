const exp = require('express');
const app = exp();
require('dotenv').config();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

const modeloClientes = require('./backend/models/cliente.model');
const { get } = require('http');

app.post("/clientes", (req, res) => {
  const cliente = new modeloClientes({
    documento: req.body.documento,
    nombre: req.body.nombre ,
    fechaNacimiento: req.body.fechaNacimiento 
  });

  cliente.save()
    .then(clienteGuardado => {
      res.status(201).json(clienteGuardado);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

app.get("/clientes", (req, res) => {
  modeloClientes.find()
    .then(clientes => {
      res.status(200).json(clientes);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

app.delete("/clientes/:id", (req, res) => {
  const id = req.params.id;
  modeloClientes.findByIdAndDelete(id)
    .then(clienteEliminado => {
      if (!clienteEliminado) {
        return res.status(404).json({ error: "Cliente no encontrado" });
      }
      res.status(200).json({ message: "Cliente eliminado correctamente" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor en línea en el puerto " + PORT);
});

app.put('/clientes/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = {
    nombre: req.body.nombre,
    documento: req.body.documento,
    fechaNacimiento: req.body.fechaNacimiento
  };

  modeloClientes.findByIdAndUpdate(id, datosActualizados, { new: true })
    .then(clienteActualizado => {
      if (!clienteActualizado) {
        return res.status(404).json({ error: 'Cliente no encontrado' });
      }
      res.status(200).json(clienteActualizado);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});