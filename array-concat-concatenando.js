linha("Concat"); // ===============================================================================

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

// Concatenando os elementos do array salaPython = ["Ju", "Leo", "Raquel"] no final do array salaJS
const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas); // [ 'Evaldo', 'Camis', 'Mari', 'Ju', 'Leo', 'Raquel' ]

function linha(lineName) {
    console.log(`\n====================== ${lineName} ============================\n`)
};

linha("Concat com Strings"); // ===============================================================================

const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat1 = arrayOriginal1.concat("André", "Fernanda");

console.log(arrayOriginal1); // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]
console.log(arrayConcat1); // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]

linha("Concat com múltiplos Arrays"); // ===============================================================================

const arrayOriginal2 = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat2 = arrayOriginal2.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"]);

console.log(arrayOriginal2); // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]
console.log(arrayConcat2); // [ 'Maria', 'Carlos','Eduardo', 'Samanta','André', 'Fernanda','Ricardo', 'Ana','Marcelo', 'Bia' ]

linha("Concat array com dois elementos(Matriz), um número e um array"); // ===============================================================================

const arrayOriginal3 = [50, 60, 70];
const arrayConcat3 = arrayOriginal3.concat([80, [90, 100]]); // O Array [80, [90, 100]] tem dois elementos, 80 e [90, 100].

console.log(arrayOriginal3); // [ 50, 60, 70 ]
console.log(arrayConcat3); // [ 50, 60, 70, 80, [ 90, 100 ] ]

/*
Quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. 
Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não 
vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi 
extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] 
como um único elemento.
*/