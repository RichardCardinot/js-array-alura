const notas = [10, 6, 8];

console.log(`O Array "notas" contém os elementos: ${notas}.`);

// Apesar do Array "notas" ser uma constante, o JS deixa manipularmos os seus valores quando usamos métodos do próprio Array.
// O método .push() adiciona o novo elemento Array. (No final dele).
notas.push(7); 

// Já uma nova atribuição não é possível, neste caso, é retornado erro no console. (TypeError: Assignment to constant variable.)
// notas = []; 
 
console.log(`E após a utilização do mótodo .push(), o Array "notas" ficou os elementos: ${notas}.`);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 

console.log(`A média é: ${media}.`);  // 7.75