var numero1 = prompt("Introduce el primer numero de la division:");
numero1 = parseInt(numero1);
var numero2 = prompt("Introduce el segundo numero de la division:");
numero2 = parseInt(numero2);
while (numero2 == 0) {
    var numero2 = prompt("No se puede dividir entre cero, Introduce otro nuemero:");
numero2 = parseInt(numero2);
}

document.write(`<h2> ${numero1}/${numero2}=${numero1/numero2} <h2>`);
