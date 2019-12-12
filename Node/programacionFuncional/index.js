 const mascotas = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];


    let nombreMascotas = mascotas.map ( mascota =>{

        return mascota.nombre;
    })

    console.log(nombreMascotas);

   // let conejos = animalitos.filter(function (animal){

   //     return animal.especie === 'conejo';

   // });

   // console.log(conejos);

    