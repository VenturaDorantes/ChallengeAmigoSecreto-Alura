let amigos = [];

// Función para agregar un amigo escrito
const agregarAmigo = () => {
    let amigoEscrito = document.getElementById('amigo').value;

    // Validando que no este mandando un campo vacio
    if(amigoEscrito == ""){ 
        alert("Por favor, inserte un nombre");
        return;
    }

    // Agregando amigo escrito en array amigos
    amigos.push(amigoEscrito);
    // Vaciando valor del cuadro de texto
    document.getElementById('amigo').value = "";
}
