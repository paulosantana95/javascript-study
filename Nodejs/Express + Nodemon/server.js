const express = require('express');
const app = express();

//          Criar   Ler   Atualizar  Deletar
// CRUD -> CREATE,  READ,  UPDATE,   DELETE
//          POST     GET     PUT     DELETE


// http://meusite.com/ <- GET -> Navegador Entregue a Página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// Essas são rotas da da nossa aplicação e o Expresss ajudar a Resolver.

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/mundo', (req, res) => {
  res.send('Olá mundo!')
});

app.listen(3000, () => {
  console.log('http://localhost:3000/')
  console.log('Server is running.')
});
