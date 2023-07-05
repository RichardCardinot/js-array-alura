const notas = [ 7, 7, 8, 9 ];

const novasNotas = notas; // Ao realizar esse tipo de atributação, o JS entende que "novasNotas" e "notas"
                          // tem o mesmo endereço de memória, desta forma ao alterar os elementos de "novasNotas"
                          // tal alteração também será aplicada em "notas", vice e versa também.

novasNotas.push(10); // vai adicionar 10 em "novasNotas" e em "notas"
notas.push(5); // vai adicionar 5 em "novasNotas" e em "notas"

console.log(`Valores do array novasNotas: ${novasNotas}`); // 7,7,8,9,10,5
console.log(`Valores do array notas: ${notas}`); // 7,7,8,9,10,5

// Uma atribuição de um array é chamada de atribuição por referência, pois 
// nela é passada a referência do array em si, e não uma cópia de seu valor.

// =====================================================================

//                        Clonando o array

const novasNotas2 = [...notas]; // Ao usar o "..." (spread operation) junto de uma lista (...notas),
                                // os valores desta lista são espalhados (spread), então é como se 
                                // em [] estivesse [ 7, 7, 8, 9, 10, 5 ]

novasNotas2.push(11);

console.log(`Valores do array novasNotas2: ${novasNotas2}`); // 7,7,8,9,10,5,11
console.log(`Valores do array notas: ${notas}`); // 7,7,8,9,10,5

const novasNotas3 = [1, ...notas, 12]; // Incluindo 1 no início, espalhando o array notas e incluindo o 12 no final

console.log(`Valores do array novasNotas3: ${novasNotas3}`); // 7,7,8,9,10,5,11,12
console.log(`Valores do array notas: ${notas}`); // 7,7,8,9,10,5