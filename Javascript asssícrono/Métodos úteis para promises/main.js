function random(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('BAD VALUE');
        return;
      }
        
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return;
      }, tempo)
  });
}

//Métodos úteis para promises
// Promise.all / Promise.race / Promise.resolve / Promise.reject(Cai direto no catch(error));


// const promises = [
//   // 'Primeiro valor',
//   esperaAi('Promise 01', random(1,5)),
//   esperaAi('Promise 02', random(1,5)),
//   esperaAi('Promise 03', random(1,5)),
//   esperaAi(1000, random(1,5)),
//   // 'Outro valor'
// ];

// Promise.resolve(promises)
//   .then(function(valor) {
//     console.log(valor);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });


function baixaPaigina() {
  const emCache = true;

  if(emCache) {
    return Promise.reject('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPaigina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => {
    console.log('ERROR', e);
  })