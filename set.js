const nomes = [ "Ana", "Clara", "Maria", "Maria", "João", "João", "João" ];

const nomesAtualizados = [...new Set(nomes)] // Set() não permite elementos duplicados
                                             // O "..." (spread operator) espalha o Set()

console.log(nomesAtualizados); // [ 'Ana', 'Clara', 'Maria', 'João' ]