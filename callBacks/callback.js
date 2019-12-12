/*
let ejecOperacion = (operacion, n1, n2) => {
return operacion(n1, n2);


}

let suma = (num1, num2) => {

    return num1 + num2;
}

let mult = (num1, num2) => {

    return num1 * num2;
}

console.log(ejecOperacion (suma, 5, 10));
console.log(ejecOperacion (mult, 5, 10));
*/
/*
const operacion = (opr, num1, num2) => {

    return opr (num1, num2);
}

const suma = (n1,n2) => {

    return n1 + n2;
}

const resta = (n1,n2) => {

    return n1 - n2;
}

const mult = (n1,n2) => {

    return n1 * n2;
}

console.log(operacion (resta, 5, 5 ));
console.log(operacion (mult, 5, 5 ));
*/
/*
const cambiarFormato = (cdn1, pejelagarto) => {

    cdn1(pejelagarto);
}


const min = (pejelagarto) => {

    return pejelagarto.toLowerCase();
}

const mayu = (pejelagarto) => {

    return pejelagarto.toUpperCase();
}

console.log(cambiarFormato(min, 'pejelagarto') );
console.log(cambiarFormato(mayu, 'pejelagarto') );
*/




/*
const ejemCallBack = (callback, mensaje) => {

    callback(mensage);
}

const log = (msg) => {

    console.log(msg);
}

const warm = (msg) => {

    console.log(msg);
}

console.log(callback(warm));
*/


/*
let ejemCallBack = () => {

    console.log("Ejemplo de callback");
}

let muestraMsg = (ejemCallBack) => {

    ejemCallBack;

}

console.log(muestraMsg (ejemCallBack));
*/





//- Hacer un arreglo de 4 cantidades de tiempo en minutos
// EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
//mayores a dos horas (hacer la comparación en horas) 
// mediante un callback

const mayos2horas = (arreglo, callback) => {
    return callback(arreglo);


}

const comparacion = () => {

    let cant = [];

    for (let i = 0; i< cant.length; i++){

        if (arreglo [i]>=120){

            cant.push(arreglo[i]);
        }


    }

    return cant;
}

const arregloFinal = mayos2horas([1,200,120,50,450], comparacion);

console.log(arregloFinal);

