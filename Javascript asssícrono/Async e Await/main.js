function random(min = 0, max = 3){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAIU NO ERRO');
        return;
      }
        
        resolve(msg.toUpperCase() + ' - Passei na promise');
        return;
      }, tempo)
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi('Fase01', random());
    console.log(fase1);
    const fase2 = await esperaAi(2222, random());
    console.log(fase2);
    const fase3 = await esperaAi('Fase03', random());
    console.log(fase3);
    
    console.log('Terminamos na fase: ', fase3);
  } catch (e) {
    console.log(e);
  }
}
executa();

//FORMA DE RETORNAR PROMISES SEM ASYNC E AWAIT
// esperaAi('Fase01', random())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase02', random());
//   })
//     .then(valor => {
//       console.log(valor);
//       return esperaAi('Fase03', random());
//   })
//     .then(valor => {
//       console.log(valor);
//       return valor
//   })
//     .then(valor => {
//       console.log('Terminou na ', valor);
//     })
//     .catch(e => console.log(e));