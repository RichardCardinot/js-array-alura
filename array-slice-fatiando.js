const alunos = ["João", "Juliana", "Ana", "Caio", "Lara", 
                "Marjorie", "Guilherme", "Aline", "Fabiana", 
                "Andre", "Carlos", "Paulo", "Bia", "Vivian", 
                "Isabela", "Vinícius", "Renan", "Renata", "Daisy", 
                "Camilo"]; 

// posição do array       [0, 10]   (Começa no indice [0] e finaliza no indice [9]. Considera até o indice anterior ao que foi passado.)              
const sala1 = alunos.slice(0, 10);

// posição do array       [10]   (Começa no indice [10] e finaliza no último elemento do Array, sem precisar informa-lo) 
const sala2 = alunos.slice(10);

console.log(sala1);
console.log(sala2);

// Documentação do método slice(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice