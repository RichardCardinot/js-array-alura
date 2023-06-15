const alunos = [ "João", "Juliana", "Ana", "Caio" ];
const medias = [ 10, 8, 7.5, 9 ];

const arrayDeAlunosEMedias = [alunos, medias]; // Este é um array de duas dimensões (Matriz).

function exibeNomeENota(aluno) {
    if (arrayDeAlunosEMedias[0].includes(aluno)) { // O método includes() retorna true se o parâmetro estiver incluso no array.
        // const alunos = arrayDeAlunosEMedias[0];
        // const medias = arrayDeAlunosEMedias[1];

        // Desestruturação de array:
        const [ alunos, medias ] = arrayDeAlunosEMedias; // Nomeando cada um dos elementos contidos dentro do array arrayDeAlunosEMedias. 
                                                       // Tem o mesmo comportamento das atribuições feitas acima, mas com outra sintaxe.
 
        const indice = alunos.indexOf(aluno); // O método indexOf() retorna o indice do parâmetro passado.

        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}.`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");