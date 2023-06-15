const numeros = [ 100, 200, 300, 400, 500, 600 ];

// Primera expressão: É executada apenas uma única vez. => "let indice = 0";
// Segunda expressão: É a condição de execução. => "indice < numeros.length";
// Terceira expressão: É sempre executada ao final do bloco {}. => "console.log(numeros[indice])".

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
};