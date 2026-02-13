// usuarios guardados localmente
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {
admin:"1234"
};

function guardar(){
localStorage.setItem("usuarios",JSON.stringify(usuarios));
}

function login(){

let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(usuarios[u]===p){

alert(" Bienvenido "+u);

}else{

error("Datos incorrectos");

}

}

function registrar(){

let u=document.getElementById("newUser").value;
let p=document.getElementById("newPass").value;

if(!u || !p){
error("Completa los campos");
return;
}

if(usuarios[u]){
error("Usuario ya existe");
return;
}

usuarios[u]=p;
guardar();

alert(" Cuenta creada");
window.location="login.html";

}

function irRegistro(){
window.location="registro.html";
}

function volverLogin(){
window.location="login.html";
}

function error(msg){
document.getElementById("error").innerText=msg;
} 