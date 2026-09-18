/*Ejemplo arrow function temario (funciones flecha): 

let potencia = (base) =>  base ** 2;

*/

/*Haz una arrow function que devuelva el cubo del número pasado como parámetro y pruébala desde la consola. Escríbela primero en la forma habitual y luego la "traduces" a arrow function. */

//Forma habitual
let num = 3;

let cubo = function(numero=0) {
    let resultado = numero * numero * numero;
    return resultado;
}

console.log(cubo(num));

//Con arrow function
let cubo2 = (numero=0) => numero ** 3;

console.log(cubo2(num));