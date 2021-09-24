/**
 * Función para consumir una api rest
 */
async function getCharacters(){
    //Generar petición a la api
    const peticion = await fetch("https://futuramaapi.herokuapp.com/api/v2/characters");
    console.log(peticion);
    console.log("---------------");
    const personajes = await peticion.json();
    console.log(personajes);

    //agregar código html al documento
    let contenedor = document.getElementById("contPersonajes");
    //mostrar los personajes en consola
    personajes.forEach(element => {
        //console.log(element.Name+" - Specie: "+element.Species);
        let tarjetaPersonaje = "<div class='card' style='width: 18rem;'>";
        tarjetaPersonaje += "<img id='"+element.Name+"' src='"+element.PicUrl+"' class='card-img-top' alt=''>";
        tarjetaPersonaje += "<div class='card-body'>";
        tarjetaPersonaje += "<h5 class='card-title'>"+element.Name+"</h5>";
        tarjetaPersonaje += "<p class='card-text'></p>";
        tarjetaPersonaje += "</div></div>";

        contenedor.innerHTML += tarjetaPersonaje;
        
    });

}


