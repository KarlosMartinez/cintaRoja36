

/*
const  farenheitToCelsius () => {

    valor1=far.value;
    

    (valor1-32)* 5 / 9

}
console.log (farenheitToCelsius());
*/

/*convertir fanheit a celsius*/


/*

function farenheitToCelsius(gradosf){
let result = (gradosf - 32 ) * 5/9;
return  `Los Grados ${gradosf} Farenheit son ${result} cerlsius`

}

console.log (farenheitToCelsius(64));
*/


//Crea una función llamada evaluateLetter() que reciba como parámetro
// cualquier letra del alfabeto y verifique si es vocal o consonante.

//En caso de ser vocal, devolver "Vocal"
//En caso de ser consonante, devolver "Consonante"
/*
function evaluateLetter(letra) {

   const  vocal = ['a','e','i','o','u'];

   for (let i=1; i<vocal.length;i++ ){

    if (letra.toLowerCase() == vocal[i]){

        return "Vocal";
    }else {
        return "Consonante";
    }
   }
}
console.log(evaluateLetter("c"));
*/

/*Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal y lo convierta en un número binario retornando su resultado.
const decimalToBinary = (num) =>{

  let resultado = num;
  let binario = [];

  while(resultado=>1){
if (resultado%2 == 0) {
    binario.push(0);

}else{
    binario.push(1);
}

resultado= resultado/2;
  }
  
}
console.log(decimalToBinary(100));

*/


//---------ARRAYS---------//
/*
let miArreglo = [1,2,3,4,5];
let vocales = ['a','e','i','o','u'];

*/

//----------existen metodos para agregar o quitar elementos de los arreglos---------//

//push: agrega elemetos al final del  arreglo

//pop: elimina elemntos al final del  arreglo


/*--Crea una función llamada evaluateNumber() que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es.
En caso de ser divisible entre 5 y 11, retornar true
En caso de no ser divisible entre 5 y 11, retornar false*/

const evaluateNumber=(num) => {

    let div = num;

    if(div % 5 === 0 || div % 11 === 0 ){

        return true;

    }else{

        return false;
    }


}
console.log(evaluateNumber(55));




