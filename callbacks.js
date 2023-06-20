
linha(" Sobre a função callback "); 

const nomes = ["Evaldo", "Mari", "Camis"];

// Função anônima, usada como callback: "function () {}""
nomes.forEach(function (nome) {
    console.log(nome);
});

linha(" Separando os outputs dos procedimentos "); 

// =================================================================

// Função anônima, na sintaxe de arrow function, usada como callback: "() => {}""
nomes.forEach((nome) => {
    console.log(nome);
});

linha(" Separando os outputs dos procedimentos "); 

// =================================================================

// Criando uma função e a utilizando como uma função callback: 
function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome); // Passamos a referência da função, por isso não podemos informar os parênteses () dela.

// =================================================================
linha(" Fim "); 

function linha(lineName = "=") {
    console.log(`\n======================${lineName}============================\n`)
};