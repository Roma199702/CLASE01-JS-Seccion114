//funcion on click
//function irPagina(){
//  window.location.href = "index.html";
//}

let boton= document.getElementById("btnIngresar");

// boton.addEventListener("click", function (){
//     console.log("Hiciste click en el boton");
// } );

//validacion de los input
// boton.addEventListener("click", function (){
//     let usuario = document.getElementById("usuario").value;
//     let clave = document.getElementById("clave").value;
    
//     console.log("usuario ingresado: "+ usuario);
//     console.log("Password ingresado: "+ clave);
// } );

boton.addEventListener("click", function (){

    let usuarioCorrecto = "admin";
    let claveCorrecta = "1234";

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById ("clave").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario === "" || clave === ""){
        mensaje.textContent = "Debes completar todos los campos";
        mensaje.style.color = "orange";
    }else if(usuario === usuarioCorrecto && clave === claveCorrecta){
        mensaje.textContent = "acceso Permitido";
        mensaje.style.color = "greem";

        setTimeout (function (){
            window.location.href = "index.html"
        }, 3000);
    }else {
        mensaje.textContent = "Usuario o contraseña incorrecta";
        mensaje.style.color = "red";

    }
    

});