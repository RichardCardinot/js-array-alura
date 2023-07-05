linha("Concatenando arrays com o destructuring");

// Concatenando arrays com o destructuring:

const numerosPares = [ 2, 4, 6 ];
const numerosImpares = [ 1, 3, 5 ];

const numeros = [ numerosPares, numerosImpares ]; // Array de duas dimensões.

const numerosDestructuring = [...numerosPares, ...numerosImpares];

console.log(numeros); // [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]
console.log(numerosDestructuring); // [ 2, 4, 6, 1, 3, 5 ]

// =================================================================
linha("Declarando variáveis com o destructuring");

// Declaração de variável convencional:
const num1 = 1;
const num2 = 2;

console.log(num1, num2);

// Declaração de variável com o destructuring:
const [ num3, num4 ] = [ 3, 4 ];

console.log(num3, num4);

// Declaração de variável com o destructuring:
const [num5, num6, ...numOutros] = [ 5, 6, 7, 8 ]; // Ao utilizar o ..., os demais valores serão atribuído a variável seguinte ao ...

// =================================================================
linha("Atribuindo valor padrão com o destructuring");

console.log(num5, num6, numOutros); //  6 [ 7, 8 ]

const [nome1 = "Richard"] = []; // Atribuindo valor padrão, no caso "Richard", para ser usado se passarmos um array vazio [].
const [nome2 = "Richard"] = [ 1 ]; // Nesta caso, como passamos um array preenchido [1], o restorno será 1.

console.log(nome1, nome2); // Richard 1

// =================================================================
linha("Usando o destructuring em objetos");

const pessoa = {         // Objeto pessoa criado com os atributos nome e idade.
    nome: "Richard",
    idade: 33
};

// Usando o destructuring em objetos:
const pessoaComTelefone = {...pessoa, telefone: 22884455};  // Mesclando o objeto pessoa com o atributo telefone, criando assim 
                                                            // um novo objeto com os atributos nome, idade e telefone. 

console.log(pessoa, pessoaComTelefone);

// =================================================================
linha("Extraindo valor do objeto com o destructuring");

// Acessando o objeto "pessoa" e atribuindo o valor do atributo "nome", na variável "nome":
const { nome } = pessoa;

const { idade } = pessoa;

console.log(nome, idade); // Richard 33

// =================================================================
linha("Obtendo parâmetros específicos do objeto na função com destructuring");

// Usando o destructuring para pegar somente os atributos descritos do objeto passado como parâmentro.
function imprimeDados({ nome, idade }) {  // { nome, idade }, sendo {} o objeto e "nome, idade" os parâmetros necessários deste objeto.
     console.log(nome, idade)
};

imprimeDados(pessoa); // Richard 33


function linha(lineName) {
    console.log(`\n====================== ${lineName} ============================\n`)
};
