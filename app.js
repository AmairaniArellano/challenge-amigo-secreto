// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let ingresarAmigos = document.getElementById("amigo");


function agregarAmigo() {
    if (ingresarAmigos.value == '') {
        alert('Por favor, ingrese un nombre');
    } else { 
        listaAmigos.push(ingresarAmigos.value);// Agregar nombre a la lista
        console.log(listaAmigos); //Verificar el arreglo
        ingresarAmigos.value = ''; //Limpiar el campo de texto después de agregar
    }
}