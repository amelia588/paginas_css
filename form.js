const nombre=document.getElementById("myname");
const apellidos=document.getElementById("surname");
const correo=document.getElementById("email");
const celular=document.getElementById("mobile");
const contrasenia=document.getElementById("password");
const contrasenia2=document.getElementById("repeatpasswor");
const terminosYcondiciones=document.getElementById("terms");
const form=document.getElementById("form")
const listInputs=document.querySelectorAll(".form-input")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let condicion=validacionForm();
    if(condicion){
        EnviarFormulario();
    }
    EnviarFormulario();
});
    function validacionForm(){
        let condicion=True;
    listInputs.forEach((element)=> {
        element.lastElementChild.innerHTML = "";
        form.lastElementChild.innerHTML="";
        
    });
   

    

    if (nombre.value.length < 1 || nombre.value.trim()=="") {
        mostrarMensajeError("myname", "Nombre no valido*")
        condicion=False;
 
    }
    if (apellidos.value.length<1 || apellidos.value.trim()==""){
        mostrarMensajeError("surname", "Apellido no valido*")
        condicion=False;
    
   
    }
    if (correo.value.length<1 || correo.value.trim()==""){
        mostrarMensajeError("email", "correo no valido*")
        condicion=False;
    
   
    }

    if (
        celular.value.length!=9|| 
        celular.value.trim()=="" || 
        isNaN(celular.value)
        ){
        mostrarMensajeError("mobile", "celular no valido*")
        condicion=False;
    }
   
    
    if (contrasenia.value.length<1 || contrasenia.value.trim()==""){
        mostrarMensajeError("passwrd", "contrasenia no valido*")
        condicion=False;
    
   
    }
    if (contrasenia2.value !=contrasenia.value){
        mostrarMensajeError("srepeatpasswor", "contraseña error")
        condicion=False;
    
   
    }
    if (!terminosYcondiciones.checked){
     mostrarMensajeError("terminosYcondiciones", "Acepte*")
    } else{
        mostrarMensajeError("terminosYcondiciones", "");
        

    }
    return condicion;
    
}
    

function mostrarMensajeError(claseInput,mensaje){
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}
function EnviarFormulario(){
    form.requestFullscreen();
    
}