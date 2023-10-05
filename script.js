const alunos = [
    {
      "name": "Jose Luiz",
      "age": 16,
      "matricula": 1050,
      "nota1": 2,
      "nota2": 5
    },
    {
      "name": "Ricardo Lobo",
      "age": 15,
      "matricula": 1051,
      "nota1": 7,
      "nota2": 7
    },
    {
      "name": "Luana mendes",
      "age": 17,
      "matricula": 1052,
      "nota1": 5,
      "nota2": 7
    },
    {
      "name": "Poliana Beira",
      "age": 14,
      "matricula": 1053,
      "nota1": 2.5,
      "nota2": 6
    },
    {
      "name": "João Souza",
      "age": 15,
      "matricula": 1054,
      "nota1": 5,
      "nota2": 3
    },
];

function media(nota1, nota2) {
  return (nota1 + nota2 / 2)
};

function printAlunoMedia(aluno) {
  return `A média do(a) aluno(a) ${aluno.name} é = ${media(aluno.nota1, aluno.nota2)}`  
};

for (let aluno of alunos) {
  let alunoMessage = printAlunoMedia(aluno)
 
  if (media(aluno.nota1, aluno.nota2) < 7 ) {
    alert(alunoMessage + `\nNão foi dessa vez, ${aluno.name}! Tente novamente!`)
  }
  else {
    alert(alunoMessage + `\nParabéns, ${aluno.name}! Você foi aprovado(a) no concurso!`)
  }
};
