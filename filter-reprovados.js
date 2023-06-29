const alunos = [ "Ana", "Marcos", "Maria", "Mauro" ];
const medias = [ 7, 4.5, 8, 7.5 ];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7; // Quando a função callback retorna verdadeiro, ou true, 
                               // o elemento é adicionado no array de retorno, e quando 
                               // ela retorna falso, ou false, o elemento é descartado.
});

console.log(reprovados);

                                // Quando o primeiro parâmetro não é utilizado, por convenção é usado o "_".
const aprovados = alunos.filter((_, indice) => {
    return medias[indice] >= 7; // Quando a função callback retorna verdadeiro, ou true, 
                                // o elemento é adicionado no array de retorno, e quando 
                                // ela retorna falso, ou false, o elemento é descartado.
});