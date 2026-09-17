/* Actividad 2:  Modifica la función que devuelve el cubo de un número para que compruebe si el parámetro pasado es un número entero. Si no es un entero o no es un número mostrará un alert indicando cuál es el problema y devolverá false. 

function cubo(numero) {
    let resultado = numero * numero * numero;
    return resultado;
}
*/

//Solucion:
let num = 5;

function cubo(numero) {
    let resultado = numero * numero * numero;

    if (!Number.isInteger(numero)) {
        alert("El parámetro " + numero + " pasado no es un entero");
        return false;
    }

    return resultado;
    
}

console.log(cubo(num));