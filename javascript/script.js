
//linterna
document.addEventListener("mousemove", (e) => {
    const linterna = document.getElementById("linterna");
    linterna.style.top = `${e.clientY}px`;
    linterna.style.left = `${e.clientX}px`;
});

//boton mute
const audio = document.getElementById("background-music");
        const muteButton = document.getElementById("mute-button");
        muteButton.addEventListener("click", () => {
            if (audio.muted) {
                audio.muted = false;
                muteButton.textContent = " 🔊 ";
            } else {
                audio.muted = true;
                muteButton.textContent = " 🔇 ";
            }
        });

document.getElementById('formularioComentario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página al enviarlo
            
// Obtener el valor del comentario
const comentario = document.getElementById('comentario').value;
            
    // Si el comentario no está vacío, lo agregamos al div de comentarios
    if (comentario.trim() !== "") {
        const nuevoComentario = document.createElement('p');
        nuevoComentario.textContent = comentario;
        nuevoComentario.classList.add('text-white', 'bg-gray-800', 'p-3', 'rounded-lg', 'my-2');
                
        // Agregar el comentario al div de comentarios
        document.getElementById('comentariosLista').appendChild(nuevoComentario);
                
        // Limpiar el campo de texto del formulario
        document.getElementById('comentario').value = "";
    }
});