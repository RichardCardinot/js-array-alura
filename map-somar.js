const arrayNums = [1, 2, 3, 4];

// Criando a função callback:
function multiplicaPorDez(num) { 
    return num * 10;
   };

const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);

// Para o JavaScript, qualquer função que seja chamada como argumento 
// de outra é considerada uma função callback, não apenas em caso de métodos.