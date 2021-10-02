const array = [];


function agregarRegistro(){
    this.nombre = document.getElementById('nombre').value;
    this.genero = document.getSelection('nombre').value;
    this.telefono = document.getElementById('telefono').value;
    this.direccion = document.getElementById('direccion').value;
    this.correo = document.getElementById('correo').value;
    this.pass = document.getElementById('pass').value;
    /*
    this.nombre = nombre;
    this.genero = genero;
    this.telefono = telefono;
    this.direccion = direccion;
    this.correo = correo;
    this.pass = pass;
    */
    console.log("nombre: "+nombre+" Género: "+genero+"Teléfono: "+telefono+"Dirección"+direccion+"Correo: "+correo+"Paswword: "+pass);

    let tempo = [];
    tempo.push(this.nombre);
    tempo.push(this.genero);
    tempo.push(this.telefono);
    tempo.push(this.direccion);
    tempo.push(this.correo);
    tempo.push(this.pass);

    array.push(tempo);

    console.log(array);
}

/*
module.exports={agregarRegistro};
*/