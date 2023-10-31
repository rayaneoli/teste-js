// let x = " ";
// console.log(x)

// x = "oi";

// Primeiro declara a funcao


// function imprimatexto (texto) {
//     console.log(texto)
// }


// segundo executa a funcao 1 ou mais vezes

// imprimatexto("oi");
// imprimatexto("qualquer coisa")

// function soma() {
//     return 2+2;
// }

// console.log(soma())


// Usando uma funcao dentro da outra

function imprimatexto (texto) {
        console.log(texto)
    }

imprimatexto(soma());


function soma() {
    return 2+2;
}