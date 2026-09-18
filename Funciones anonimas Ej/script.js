/*definir una función sin darle un nombre. Dicha función puede asignarse a una variable, autoejecutarse o asignarse a un manejador de eventos.*/
let sumarNums = function(num1=0,num2=0){
	return num1 + num2;
}

console.log(sumarNums(2,3));