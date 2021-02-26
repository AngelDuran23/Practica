var numero1 = prompt("Introduce el primer numero:");
numero1 = parseInt(numero1);
var numero2 = prompt("Introduce el segundo numero :");
numero2 = parseInt(numero2);
var numero3 = prompt("Introduce el tercer numero :");
numero3 = parseInt(numero3);



if (numero1 == numero2 && numero1==numero3) {
    document.write(`<h2> Los tres son iguales <h2>`);
}else{
    document.write(`<h2> El mayor de los tres es:${Math.max(numero1,numero2,numero3)} <h2>`);
}