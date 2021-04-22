const express = require('express');
const productsRoute = require('./src/routes/productsRoute');
const salesRoute = require('./src/routes/salesRoute');
const errorMiddlewares = require('./src/middlewares/errorMiddlewares');

const app = express();

app.use(express.json());
app.use(productsRoute);
app.use(salesRoute);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddlewares);

app.listen(3000, () => {
  console.log('Rodando!');
});
