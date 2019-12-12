class Mascota {
    constructor(nombre, patas) {
        this.cerebro = true;
        this.nombre = nombre;
        this.patas = patas;
        console.log('se creo la mascota');

    }

    getNombre() {
        return this.nombre;
    }
}

class Perro extends Mascota {
    constructor(pulgas, raza, color) {
        super("firulais", 4);
        this.pulgas = pulgas;
        this.raza = raza;
        this.color = color;

    }

    ladrar() {
        return "Wuauu";
    }
}

class Gato extends Mascota {
    constructor(vidas, raza, pelusa, edad, unias, color, botas, nombre) {
        super(nombre, 3);
        this.vidas = vidas;
        this.raza = raza;
        this.pelusa = pelusa;
        this.edad = edad;
        this.unias = unias;
        this.color = color;
        this.botas = botas;

    }

    ronronear() {

        return "Grrrr!!!";
    }

    quitarVida() {
        this.vidas = this.vidas - 1;
        return this.vidas;

    }

    tieneBotas() {
        if (this.botas) {
            console.log("El gato con botas");
        } else {
            console.log("El gato sin botas");
        }

    }
}

const toby = new Perro (3, "Chihuahua", "cafe", "Toby");
console.log(toby);
toby.ladrar();

const gatito = new Gato (7,"gato","yyy", 10,5,"rojo", true, "Panchito");
console.log(gatito);
gatito.ronronear();
gatito.tieneBotas(true);
gatito.quitarVida();