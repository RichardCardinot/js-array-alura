linha("Utilizando o for com array")
const notas = [ 10 ,6.5 , 8, 7.5 ];

// Selecionando a palavra que deseja alterar e clicando em "F2", o VS muda a palavra em todos os pontos. 
// Ex.: Selecionar a palava "indice", clicar em  "F2", digitar "i" e clicar em "ENTER".

let somaDasNotas = 0; 

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
};

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);

// =================================================================
linha("Utilizando o for com matriz")

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [ notas1, notas2, notas3 ];

let mediaMatriz = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        mediaMatriz += notasGerais[i][j] / notasGerais[i].length;
    }
  }

  mediaMatriz = mediaMatriz / notasGerais.length;

  console.log(`A média de notas da Matriz é ${mediaMatriz}.\n`)

// =================================================================
linha("Utilizando o for para exibir os números pares de 0 a 100")

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);

// =================================================================

function linha(lineName) {
    console.log(`\n====================== ${lineName} ============================\n`)
};