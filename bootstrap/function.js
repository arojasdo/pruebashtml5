/*********VARIABLES********/
console.log("*********VARIABLES***********")
const numero_5 = 5;
var cadena = "Mi nombre es Alexis"; /*variable global */
let numero_1 = 1; /*variable local */
let decimal = 10.2;

var personas = ["Juan", "Andrea", "Jose"]; /*ARREGLOS */
/* agregar elementos */
personas.push("Juana");
/*Eliminar elementos */
personas.pop("Andrea");
console.log(personas);
var estudiantes = {id: 1, nombre: "Miguel", telefono: "7748521"};

/***************CILOS**********/
console.log("*********CICLO FOR***********")
for (let i = 0; i<10; i++){
    console.log(i);
}

for (let i = 0; i < personas.length; i++){
    console.log(personas[i]);
}

personas.forEach(element => {
    console.log(element);
})

console.log("*********CICLO WHILE***********")

let contador = 0;
while(contador < personas.length){
    console.log(personas[contador]);
    
    //and &&
    //or ||
    if(contador == 2){
        console.info("Contador = 2")
    }

    ++contador;
}

/*****CONSOLE*** */
console.log("Esto es un log normal")
console.info("Esto es un console info")
console.error("Console Error")
console.warn("Warning")
console.table()//CLASE 5:09

//FUNCIÓN PARA ACTUALIZAR EL DOM
function actualizarImagen(){
    let alt = document.getElementById("img1").alt;
    if(alt == 'img1'){
        document.getElementById("img1").src = "https://image.goat.com/750/attachments/product_template_pictures/images/059/514/704/original/793049_00.png.png";
        document.getElementById("img1").alt = 'img2';
    }else{
        document.getElementById("img1").src = "https://image.goat.com/750/attachments/product_template_pictures/images/060/411/172/original/GW0847.png.png";
        document.getElementById("img1").alt = 'img1';
    }
    
}

