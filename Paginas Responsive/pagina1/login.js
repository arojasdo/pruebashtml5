let registros = [];

function login(){
    validarCAPTCHA();
}

function agregarRegistro(){
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('contrasena').value;

    let usuario = {
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        contrasena: contrasena
    };

    console.log(usuario);
    registros.push(usuario);
}

function validarCAPTCHA(captcha){
    let resp = 'ocaso'
    let respUs = document.getElementById('captcha').value;
    let deletSimbolos = respUs.replace(/[^a-zA-Z0-9]/);
    if (resp == deletSimbolos){
        console.log("correcto")
        return true;
    }else{
        console.log("Fallaste")
        return false;
    }
}

/*
module.exports = {
    login,
    validarCAPTCHA,
    agregarRegistro,
    registros
}
*/