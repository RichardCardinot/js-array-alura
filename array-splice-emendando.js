linha("nomes1"); // ===============================================================================

// indice       0       1      2       3       4          5
const nomes1 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log(nomes1); // [ 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo' ]

// A partir do indice [1], remova dois elementos [2]
nomes1.splice(1, 2); // "Ana" indice [1] e "Caio" indice [2] foram removidos.

console.log(nomes1); // [ 'João', 'Lara', 'Marjorie', 'Leo' ]

linha("nomes2"); // ===============================================================================

// indice       0       1      2       3       4          5
const nomes2 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log(nomes2); // [ 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo' ]

// A partir do indice [2], remova três elementos [3] e adicione "Rodrigo", "Pedro" no intervalo removido.
nomes2.splice(2, 3, "Rodrigo", "Pedro"); // "Caio" indice [2], "Lara" indice [3] e "Marjorie" indice [4] foram removidos. 
                                         // "Rodrigo" e "Pedro" foram adicionados nos indices [2] e [3], sucessivamente.
console.log(nomes2); // [ 'João', 'Ana', 'Rodrigo', 'Pedro', 'Leo' ]

linha("nomes3"); // ===============================================================================

// indice       0       1      2       3       4          5
const nomes3 = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log(nomes3); // [ 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo' ]

// A partir do indice [1], remova nenhum elemento [0] e adicione "Richard" na posição [1].
nomes3.splice(1, 0, "Richard");

console.log(nomes3); // [ 'João', 'Richard', 'Ana',  'Caio', 'Lara', 'Marjorie', 'Leo' ]

function linha(arrayNome) {
    console.log(`\n====================== ${arrayNome} ============================\n`)
};