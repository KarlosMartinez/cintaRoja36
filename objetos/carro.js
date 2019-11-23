/*
class carro {
    //atributos del carro van dentro del constructor
    constructor(marca, color, motor){

        this.brand = marca;
        this.color = color;
        this.motor = motor;
    }

    arranca (funciona){

        if(funciona){
        console.log("El auto tiene el metodo arrancar");
        }
    }

    detiene (){
        console.log("El auto tiene el metodo de detenerse");
    }

}
const mazda = new carro('3','rojo', 2.4);
console.log(mazda.color);
mazda.arranca(true);
*/
//el nombre de las clases siempre debe empezar con mayusculas
class Cafe {

    constructor (marca, tipo, denominacion){

        this.marca = marca;
        this.tipo = tipo;
        this.origen = denominacion;
    }

    caliente (tibio){
        if(!tibio){
        console.log("Cafe Caliente: "+ this.marca);
        }
    }

    frio (){
        console.log(`Cafe Frio ${this.marca} y tiene una denominación de origen de ${this.denominacion}`);
    }

    helado(){
        console.log("Frappe");
    }
}
const cafecito = new Cafe ("nescafe","suave", "chiapas");
console.log(cafecito);
cafecito.caliente(false);
cafecito.frio();
cafecito.helado();


