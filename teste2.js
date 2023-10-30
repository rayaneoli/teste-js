//  == comparacao implicita

// const numero = 5;
// const texto = "5";

// console.log(numero == texto)

// typeof

// console.log(typeof numero)
// console.log(typeof texto)


// == so compra o valor
// === compara valor e o tipo de dado

// const idadeCliente = 20;
// const idadeMinima = 18;

// // if (idadeCliente >= idadeMinima){
// //     console.log("cerveja")
// // } else{
// //     console.log("suco")
// // }

// // operador ternario
// //              consdicao logica           true /    false
// console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")


const nome =  "rayane";
const idade = 28;
const cidadeNascimento = "rio de janeiro";

// const apresentacao = "meu nome é " + nome + ", tenho " + idade + "anos e nasci na cidade do " + cidadeNascimento;
// templeste de string

const apresentacao = `meu nome é ${nome}, tenho ${idade} anos e nasci na cidade do ${cidadeNascimento}`;
console.log(apresentacao)