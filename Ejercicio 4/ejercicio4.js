/* JAVASCRIPT DEL EJERCICIO 4 */

function letraDNI(){

    let DNI = Number(document.getElementById('DNI').value);
    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = DNI % 23;
    let letra = LETRAS.substring(resto,resto+1);

    document.getElementById('letra').innerHTML="La letra de este número de DNI es "+letra;

}