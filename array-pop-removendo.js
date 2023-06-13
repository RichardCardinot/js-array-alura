const notas = [10, 6, 8, 5.5, 10];

console.log(`O Array "notas" contém os elementos: ${notas}.`);

// Apesar do Array "notas" ser uma constante, o JS deixa manipularmos os seus valores quando usamos métodos do próprio Array.
// O método .pop() remove o último elemento do Array.
notas.pop(); 

console.log(`E após a utilização do mótodo .pop(), o Array "notas" ficou os elementos: ${notas}.`);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; 

console.log(`A média é: ${media}.`); // 7.375.