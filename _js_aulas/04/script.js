//Usando 3 condições ou mais condições usando else if e depois se não atender nenhuma das opções utiliza o else no final

let nota1 = parseFloat(prompt("nota01"))
let nota2 = parseFloat(prompt("nota02"))
let nota3 = parseFloat(prompt("nota03"))

let media = (nota1 + nota2 + nota3)/3

if(media < 5){
    console.log(`Aluno(a) reprovado(a) com média ${media}`)
}
else if(media >=5 && media <=7){
    console.log(`Aluno(a) em recuperação com média ${media}`)
}

else{
    console.log(`Aluno(a) aprovado com média ${media}`)
}

//Meses do ano

let num = parseInt(prompt("Digite o número do mês"));


if (num === 1){
    console.log("O mês digitado foi: Janeiro");
}

else if(num === 2){
    console.log("O mês digitado foi: Fevereiro");
}
else if(num === 3){
    console.log("O mês digitado foi: Março");
}
else if(num === 4){
    console.log("O mês digitado foi: Abril");
}
else if(num === 5){
    console.log("O mês digitado foi: Maio");
}
else if(num === 6){
    console.log("O mês digitado foi: Junho");
}
else if(num === 7){
    console.log("O mês digitado foi: Julho");
}
else if(num === 8){
    console.log("O mês digitado foi: Agosto");
}
else if(num === 9){
    console.log("O mês digitado foi: Setembro");
}
else if(num === 10){
    console.log("O mês digitado foi: Outubro");
}
else if(num === 11){
    console.log("O mês digitado foi: Novembro");
}
else if(num === 12){
    console.log("O mês digitado foi: Dezembro");
}

else{
    console.log("Mês não identificado");
}