//Ejemplos básicos JavaScript

let miVar = 31;
console.log(miVar+3);
console.log(miVar);
console.log("Hola Mundo");

/*Actividad 1: Modifica la función que calcula nota media para que devuelva la media con 1 decimal

function notaMedia(arrayNotas) {
    let suma = 0;
    let totalNotas = 0;
    for (nota of arrayNotas) {
        suma += nota;
        totalNotas++;
    }
    return suma / totalNotas;
}*/

//Solucion actividad 1
let notas = [8, 9, 6, 10];

function notaMedia(arrayNotas) {
    let suma = 0;
    let totalNotas = 0;

    for (notas of arrayNotas) {
        suma += notas;
        totalNotas++;
    }

    let resultado = suma / totalNotas;
    return resultado.toFixed(1);
}

console.log(notaMedia(notas));


