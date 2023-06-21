const notas = [ 10, 9.5, 8, 7, 6 ]

// O "map" executa a instrução do bloco {} para cada um dos elementos do array.

// Como o map não altera o array, temos que atribuir o seu retorno a um novo array.
const notasAtualizadas = notas.map((nota) => {

// Limitando o valor em 10.
// Op ternário:  condição ? expressão verdadeira : expressão falsa                        
    return nota + 1 >= 10 ? 10 : nota + 1;

});

console.log(notasAtualizadas);


// Obs.: É recomendado utilizar o map() sempre que for necessário reescrever os elementos do array.