const HomeModel = require('../models/HomeModel');


// Para criar uma base ou collection
// HomeModel.create( {
//   title: 'Outra coisa',
//   description: 'Outra descrição'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));


// Para Pesquisar na base ou collection
// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render('index');
}

exports.trataPost = (req, res) => {
  res.send(req.body);
  return
};