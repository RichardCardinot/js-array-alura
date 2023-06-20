linha(" Utilizando o método forEach do array ")
const notas = [ 10 ,6.5 , 8, 7.5 ];

let somaDasNotas = 0;

// ==> A função anônima "function () {}" passada dentro do forEach é chamada de callBack;
// ==> A função callback será executada para cada elemento do array, sendo que pode receber 
// de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.

// Sem o indice:
notas.forEach(function (nota) {
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

linha(" Separando os outputs dos procedimentos ");

// Com o indice:
notas.forEach(function (nota, indice) {
    somaDasNotas += nota;
    console.log(indice);
})

const media2 = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// =================================================================

function linha(lineName = "=") {
    console.log(`\n======================${lineName}============================\n`)
};