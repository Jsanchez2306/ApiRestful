const exp = requiere('express');
const app = exp();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.listen(9090, () => {
  console.log("Servidor en linea");
});