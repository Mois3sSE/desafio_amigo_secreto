// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; 

function agregarAmigo(){
let nombre = document.getElementById('amigo').value;

if(nombre === ""){
    alert('Por favor, inserte un nombre'); 
} else {
    amigos.push(nombre); 
    console.log(amigos); 
    actualizarLista();

    limpiarCampoEntrada(); 
}
return; 
}

function actualizarLista (){
    let lista = document.getElementById('listaAmigos'); 
    

    lista.innerHTML = ""; 

    for(var i = 0; i < amigos.length; i++){
    let li = document.createElement('li');  
    li.textContent = amigos[i]; 
    lista.appendChild (li); 
    }

    return; 
}

function sortearAmigo(){
if(amigos.length === 0 ){
    alert("Tu arreglo esta vacio"); 
} else {
    let indice = Math.floor((Math.random()*amigos.length));
    console.log(`El valor de los amigos es : ${amigos.length}`) 
    console.log(indice); 
    let amigoSecreto = amigos[indice]; 
    document.getElementById('resultado').innerHTML = amigoSecreto; 

}
}


function limpiarCampoEntrada(){
    document.getElementById('amigo').value = ''; 
}

