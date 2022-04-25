/* JAVASCRIPT DE */ 

function comparar() {

    //entrada de datos

    let lado1 = Number(document.getElementById('lado1').value);
    let lado2 = Number(document.getElementById('lado2').value);
    let lado3 = Number(document.getElementById('lado3').value);

    let respuesta = "";

    //evaluamos el tipo de triángulo

    if(lado1==lado2 && lado1==lado3) {
        respuesta = "EQUILÁTERO";
    }else{
        if(lado1==lado2 || lado2==lado3 || lado3==lado1){
            respuesta = "ISÓSCELES";
        }else{
            respuesta = "ESCALENO"
        }
    }

    //mostrar el resultado

    document.getElementById('resultadoTipo').innerHTML="El triángulo declarado es "+respuesta

}