// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; 

function agregarAmigo(){
let nombre = document.getElementById('amigo').value;

if(nombre === ""){
    alert('Por favor, inserte un nombre'); 
} else {
    amigos.push(nombre); 
    console.log(amigos); 
    limpiarCampoEntrada(); 
}
return; 
}

function actualizarLista (){
    
    return; 
}

function limpiarCampoEntrada(){
    document.getElementById('amigo').value = ''; 
}
