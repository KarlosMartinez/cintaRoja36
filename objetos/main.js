
//usuarios para facebook
let usuario = {};


// arreglo que contiene varios usuarios facebook
let usuarios = []
//usuarios.push(usuario);
//console.log(usuarios);
let i=0;

const register = ()=>{
   
    let nombre = prompt ('nombre');
    let correo = prompt ('correo');
    let password = prompt ( 'contraseña');
    usuario.nombre = nombre;
    usuario.correo = correo;
    usuario.password = password;
    usuarios.push(usuario);
  
    console.log(usuarios);
}
