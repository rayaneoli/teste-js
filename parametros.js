// Parametros de funcao

// function soma(numero1 , numero2) {
//     return numero1 + numero2;
// }

// console.log(soma(234, 567));


// function nomeIdade (nome, idade) {
//     return `meu nome é ${nome} e minha idade é ${idade}`;
// }
// // Caso eu troque a pasicao do nome e da idade, ainda vai rodar o codigo so que com a informacao invertidade.
// console.log(nomeIdade("rayane", 28 ))




// aqui eu realizei a multiplicao aprtir do resultado da funcao soma, como eu quero multiplicar dois numero entao passei a funcao soma duas vezes.
// function multiplica(numero1, numero2){
//     return numero1 * numero2;
// }

// function soma(numero3, numero4){
//     return numero3 + numero4;
// }

// console.log(multiplica(soma(10, 3), soma(2, 4)))


// eu passo pre determinar um valor para os parametros para caso eu passe somente um valor para minha funcao. Por exemplo;
function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

function soma(numero3, numero4){
    return numero3 + numero4;
}

console.log(multiplica(soma(10, 3)))
// nesse caso como eu so definir o valor de um paramento no consele.log, ele realizou a soma dos numeros que eu informei 10+3,
// e depois multiplico pelo numeuro pre determinado que foi 1, pois eu nao passei nem outro valor no meu console.log e na minha funcao eu dertemineir que seria uma 
// multiplicacao por dois numeros. Caso eu nao tivesse determinado o valor 1 para a variavel numero2, ao rodar o codigo iria dar erro.