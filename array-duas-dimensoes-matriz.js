const alunos = [ "João", "Juliana", "Ana", "Caio" ];
const medias = [ 10, 8, 7.5, 9 ];

// O array "listaDeAlunosEMedias" contém a array "alunos" no indice [0] e o array "medias" no indice [1].
const arrayDeAlunosEMedias = [alunos, medias]; // Este é um array de duas dimensões.

console.log(arrayDeAlunosEMedias);  // [ [ 'João', 'Juliana', 'Ana', 'Caio' ], [ 10, 8, 7.5, 9 ] ]

//         No indice [0] do array "listaDeAlunosEMedias" existe o array "alunos", e no indice [1] do array "alunos", o elemento "Juliana".
//         No indice [1] do array "listaDeAlunosEMedias" existe o array "medias", e no indice [1] do array "medias", o elemento "8".
console.log(`A aluna da posição 1 do array de alunos é a ${arrayDeAlunosEMedias[0][1]} e a sua média é ${arrayDeAlunosEMedias[1][1]}.`);