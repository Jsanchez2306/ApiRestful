const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a base de datos MongoDB'))
.catch(err => {
  console.error('Error al conectar a base de datos MongoDB:', err);
  process.exit(1); 
});

module.exports = mongoose;
