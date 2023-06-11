
// Podemos ver que o JavaScript criou o array e a guardou na variável arrayVazia, mas seu length é 0.
const arrayVazia = [];

console.log(arrayVazia); // []
console.log(arrayVazia.length); // 0

console.log(arrayVazia[0]); // undefined

linha();
// Criamos um array com 3 posições, porém em nenhuma dessas posições existe um valor. 
// De certa forma, podemos pensar que este array foi criado como um gaveteiro com três 
// gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.
const arrayVaziaDois = [,,,];
console.log(arrayVaziaDois.length); // 3
console.log(arrayVaziaDois[0]); // undefined
console.log(arrayVaziaDois[1]); // undefined
console.log(arrayVaziaDois[2]); // undefined

linha();
// -- Array esparso

// O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. 
// Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). 
// Chamamos este tipo de estrutura de array esparso e é importante lembrar deste 
// comportamento dos arrays em JavaScript enquanto trabalhamos.
console.log(arrayVaziaDois.length); // 3
arrayVaziaDois.push(50);
console.log(arrayVaziaDois); // [ <3 empty items>, 50 ]       ** Array esparso **
console.log(arrayVaziaDois.length); // 4

function linha() {console.log("=================================")};



