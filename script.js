// usuarios
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {admin:"1234"};

function guardarUsuarios(){
localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// login
function login(){
let u=user.value;
let p=pass.value;

if(usuarios[u]===p){
localStorage.setItem("sesion",u);
window.location="panel.html";
}else{
mostrarError("Datos incorrectos");
}
}

function registrar(){
let u=newUser.value;
let p=newPass.value;

if(!u || !p){mostrarError("Completa campos");return;}
if(usuarios[u]){mostrarError("Usuario existe");return;}

usuarios[u]=p;
guardarUsuarios();
window.location="login.html";
}

// sesión
function verificarSesion(){
let s=localStorage.getItem("sesion");
if(!s){window.location="login.html";return;}

let b=document.getElementById("bienvenida");
if(b) b.innerText="Usuario activo: "+s;
}

function logout(){
localStorage.removeItem("sesion");
window.location="login.html";
}

// navegación
function irRegistro(){window.location="registro.html";}
function volverLogin(){window.location="login.html";}
function irPanel(){window.location="panel.html";}
function irEscaneo(){window.location="escanear.html";}
function irBusqueda(){window.location="buscar.html";}

// errores
function mostrarError(msg){
let e=document.getElementById("error");
if(e) e.innerText=msg;
}

// inventario robot
let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

function guardarInventario(){
localStorage.setItem("inventario", JSON.stringify(inventario));
}

// simulación robot
function simularEscaneo(){

let productos=["Caja","Sensor","Motor","Cable","Etiqueta"];
let elegido=productos[Math.floor(Math.random()*productos.length)];

let ex=inventario.find(p=>p.nombre===elegido);

if(ex){ex.cantidad++;}
else{inventario.push({nombre:elegido,cantidad:1});}

guardarInventario();

robotEstado.innerText="Robot detectó: "+elegido;

let li=document.createElement("li");
li.innerText=elegido+" agregado";
escaneoLog.appendChild(li);
}

// búsqueda
function buscarProducto(){

let texto=buscar.value.toLowerCase();
let lista=document.getElementById("lista");

lista.innerHTML="";

inventario
.filter(p=>p.nombre.toLowerCase().includes(texto))
.forEach(p=>{

let li=document.createElement("li");
li.innerText=p.nombre+" — Cantidad: "+p.cantidad;

lista.appendChild(li);

});
}
