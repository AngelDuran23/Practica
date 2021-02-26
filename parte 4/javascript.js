var letra = prompt("Introduce una letra:");
letra = letra.toLowerCase();

if (letra =="a"|| letra =="e"||letra =="i"||letra =="o"||letra =="u") {
    document.write(`<h2> La letra es una vocal <h2>`);
}else{
    document.write(`<h2> La letra no es una vocal<h2>`);
}