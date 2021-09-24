
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo cambiar por #
	telefono: /^\d{7}$/ // 7 numeros.
}


/*esta validadion funciona correctamente*/
function checkNombre() {
	valorNom = document.getElementById('nombre').value;
	if(valorNom == null || valorNom.length == 0 || !/^[a-zA-ZÀ-ÿ\s]{4,40}$/.exec(valorNom)) {
		console.log("Datos incorrectos");
		return false;
	}else{
		console.log(valorNom);
		return true;
	}
}

function checkTelefono() {
	valorTel = document.getElementById('telefono').value;
	if(valorTel == null || valorTel.length == 0 || !/^\d{7}$/.exec(valorTel)) {
		console.log("Datos incorrectos");
		return false;
	}else{
		console.log(valorTel);
		return true;
	}
}




/** /^\s+$/.test(valor) */
/*valor == null || valor.length == 0 ||*/