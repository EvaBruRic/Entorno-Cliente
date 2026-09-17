/*Actividad 3: Haz una función a la que se le pasa un DNI (ej. 12345678w o 87654321T) y devolverá si es correcto o no. La letra que debe corresponder a un DNI correcto se obtiene dividiendo la parte numérica entre 23 y cogiendo de la cadena 'TRWAGMYFPDXBNJZSQVHLCKE' la letra correspondiente al resto de la divisón. Por ejemplo, si el resto es 0 la letra será la T y si es 4 será la G. Prueba la función en la consola con tu DNI */

let miDni = "52797241M";

function validarDni(dni){

    //obtener parte numerica; pasar a int
    let dniSinLetra = parseInt(dni);

    //obtener resto de la division
    let resto = dniSinLetra % 23;

    const LETRAS = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

    //guardar letra correcta
    let letraCorrecta = LETRAS[resto];

    //añadirla al dni sin letra
    let dniCorrecto = dniSinLetra + letraCorrecta;

    //comparar con la del DNI pasado
    let resultado;
    if (dni === dniCorrecto){
            resultado = "El DNI introducido es correcto";
    } else {
            resultado = "El DNI introducido es incorrecto";
    }

return resultado;

}

console.log(validarDni(miDni));

