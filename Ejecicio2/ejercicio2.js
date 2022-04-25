/* JAVASCRIPT PARA EL EJERCICIO 2 DE PORTFOLIO DE LM */

function calcular(){

    // obtener dato(radio)

    let radio = Number (document.getElementById('radio').value);
    const PI = 3.1416; //Constante, no es necesario porque está en la librería matemática de JS

    //realizar cálculos

    let circunferencia = 2 * radio * PI;
    let circulo = radio ** 2 * PI;
    let esfera = radio ** 3 * PI;

    //motrar resultados

    document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es: "+circunferencia;

    document.getElementById("circulo").innerHTML="El área del círculo es: "+circulo;

    document.getElementById("esfera").innerHTML="El volumen de la esfera es: "+esfera;
}