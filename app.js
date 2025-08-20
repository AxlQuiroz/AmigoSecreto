// Array para almacenar los nombres
let amigos = [];

// Elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const listaResultado = document.getElementById("resultado");
const botonSortear = document.querySelector(".button-draw");

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if(nombre === "") {
        alert("⚠️ El nombre no puede estar vacío");
        return;
    }

    if(amigos.includes(nombre)) {
        alert("⚠️ Este nombre ya fue agregado");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarAmigos();
    actualizarBotonSortear();
}

// Mostrar la lista de amigos
function mostrarAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Actualizar estado del botón de sorteo
function actualizarBotonSortear() {
    botonSortear.disabled = amigos.length === 0;
}

// Función para sortear un nombre aleatorio
function sortearAmigo() {
    if(amigos.length === 0) {
        alert("❌ No hay amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    listaResultado.innerHTML = ""; // limpiar resultados anteriores
    const li = document.createElement("li");
    li.textContent = `🎉 Nombre sorteado: ${nombreSorteado}`;
    listaResultado.appendChild(li);
}

// Inicializar botón deshabilitado al inicio
actualizarBotonSortear();
