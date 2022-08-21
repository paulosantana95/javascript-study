const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do Cliente: <input type="text" name="nome"> 
  <button>Enviar</button>
  </form>
  `);
});

app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Valor recebido foi: ${req.body.nome}`)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
})

app.get('/mundo', (req, res) => {
  res.send('Olá mundo!')
});

app.listen(3000, () => {
  console.log('http://localhost:3000/')
  console.log('Server is running.')
});
