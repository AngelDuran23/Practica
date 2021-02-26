var numero1 = prompt("Introduce el primer numero:");
numero1 = parseInt(numero1);
var numero2 = prompt("Introduce el segundo numero :");
numero2 = parseInt(numero2);

if (Math.sign(numero1) == 1) {
        signoNumero1 = "positivo";
}else{
    signoNumero1="negativo";
}

if (Math.sign(numero2) == 1) {
    signoNumero2 = "positivo";
}else{
signoNumero2="negativo";
}




if (signoNumero2 == signoNumero1) {
    document.write(`<h2> Hay dos numeros ${signoNumero1}s: el primero es ${signoNumero1}:${numero1} y el segundo es ${signoNumero2}:${numero2} <h2>`);
}else{
    document.write(`<h2> Hay un numero positivo y uno negativo: el primero es ${signoNumero1}:${numero1} y el segundo es ${signoNumero2}:${numero2} <h2>`);
}

