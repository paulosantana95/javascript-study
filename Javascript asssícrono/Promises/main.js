function random(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');

    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });
}


esperaAi('Frase 01', random(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi(2222, random(1, 3));
  })
    .then(resposta => {
      console.log(resposta);
      return esperaAi('Frase 03', random(1, 3));
    })
    .then(resposta => {
      console.log(resposta);
    })
    .then(() => {
      console.log('Ultimo a ser exibido')
    })
  .catch(e => {
    console.log('ERROR:', e);
  })

  console.log('Exibido antes de qlq promisse');



// Antes para se retornar uma Promise, era necessário uma função de callback como no exemplo abaixo.
// function esperaAi(msg, tempo, cb) {
//   setTimeout(() => {
//     console.log(msg);
//     if(cb) cb();
//   }, tempo)
// }
// esperaAi('Frase 01', random(1,3), function() {
//   esperaAi('Frase 02', random(1,3), function() {
//     esperaAi('Frase 03', random(1,3));
//   });
// });