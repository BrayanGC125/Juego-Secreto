/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del Número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";
*/
let numeroSecreto = 0;
let intentos = 0;
let listNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorNumero").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled")

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El número secreto es menor");
        } else {
            asignarTextoElemento ("p", "El número secreto es mayor");
        }
        intentos ++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja () {
    let valorCaja = document.querySelector ("#valorNumero").value= "";
}

function generarNumeroSecreto () {
    //return Math.floor(Math.random()*10) + 1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //Verifica si ya llegó al número máximo de intentos.
    if (listNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se sortearon todos los números posibles")
    } else {
        //si el número generado está incluido en la lista.
        if (listNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listNumerosSorteados.push(numeroGenerado);
            return numeroGenerado ;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "Juego del Número secreto");
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
