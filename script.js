// ---------------------
// FORMULARIO

//TRAER ELEMENTOS
let formName = document.querySelector('#nombre');
let formAge = document.querySelector('#edad');
let btnSubmit = document.querySelector('#submit')

//CREAR EVENTOS
formName.addEventListener('focusout', validarNombreyApellido); 

formAge.addEventListener('focusout', validarEdad); 

btnSubmit.addEventListener('click',enviar); //

//FUNCIONES
var validacion ={
    nombre:false,
    edad: false
}

function validarNombreyApellido(){
    validacion.nombre=false
    let nombre = formName.value;
    if(!nombre){
        console.log('Tenés que agregar Nombre y Apellido Completo y Real');
        document.querySelector(`#grupo_nombre .formulario_input_error`).classList.add('formulario_input_error-activo');
        validacion.nombre=true
    }else{
        localStorage.setItem('nombre', nombre)
        document.querySelector(`#grupo_nombre .formulario_input_error`).classList.remove('formulario_input_error-activo');
        document.querySelector(`#grupo_nombre .formulario_input_error`).classList.add('formulario_input_error');
        validacion.nombre=false;
    }
}

function validarEdad(){
    let edad = formAge.value;
    validacion.edad=false
    if(edad<1 || edad>100){
        console.log('Se debe ingresar una edad entre 1 y 100');
        document.querySelector(`#grupo_edad .formulario_input_error`).classList.add('formulario_input_error-activo');
        validacion.edad=true
    } else {
        document.querySelector(`#grupo_edad .formulario_input_error`).classList.remove('formulario_input_error-activo');
        document.querySelector(`#grupo_edad .formulario_input_error`).classList.add('formulario_input_error');
        localStorage.setItem('edad', edad)
        validacion.edad=false;
    }
}

function enviar(e){
    if(validacion.edad === false && validacion.nombre=== false){
        console.log('validacion OK')
        alert(`Tu nombre completo es ${localStorage.getItem('nombre')}, y tu edad es ${localStorage.getItem('edad')} años`);
        e.preventDefault();
    } else{
        console.log('validacion MAL')

        btnSubmit.disable = true
        alert(`Debes completar todos los campos`);

    }
}

// ---------------------
// FETCH

//TRAER ELEMENTOS
let btnFetch = document.querySelector('#btn')

//CREAR EVENTOS
btnFetch.addEventListener('click', mostrarFrase);

//FUNCIONES
function mostrarFrase(){
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes') //llamo al fetch
        .then(response => response.json())
        .then(data => {
            console.log(data[0].quote); //imprimo la frase en consola
            //console.log(data[0].character); //imprimo el personaje que lo dijo en consola
            crearFrase(data); 
        return
    });
//declaro e implemento la funcion a partir del data
function crearFrase(data){ 
    //accedo a los elementos que necesito
    let frase = data[0].quote;
    let imagen = data[0].image;

    //creo elementos
    const div = document.createElement("div");  //creo el div contenedor
    const img = document.createElement("img");  //creo la img y le asigno como source el src extraido del data
    img.src = imagen
    const msj = document.createElement("frase"); //creo el mensaje
    msj.innerHTML = frase

    //agregamos los elementos al div
    div.append(msj)
    div.append(img)

    //agregamos el div al body para que se vea
    document.body.appendChild(div);    
 }
}





