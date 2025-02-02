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
    listarAmigos();
}

// Funcion para listar amigos agregados
const listarAmigos = () => {
    // Obteniendo elemento donde se agregan los elementos para la lista
    let elementoParaLista = document.getElementById('listaAmigos');
    // Vaciando elementos de lista del archivo HTML
    elementoParaLista.innerHTML = "";

    // for para poder agregar los elmentos agregados en el array de amigos
    for(i = 0; i < amigos.length; i++){
        let textoHTML = "<li>" + amigos[i] + "</li>";
        elementoParaLista.innerHTML += textoHTML;
    }
}

// Funcion para poder sortear amigos
const sortearAmigo = () => {
    let elementoParaAmigoSeleccionado = document.getElementById("resultado");
    // Validacion para poder validar que el usuarion ingrese 3 nombres como minimo para sortear
    if(amigos.length < 3){
        alert("Por favor, ingrese 3 nombres como minimo");
        return;
    }

    // LLamado de funcion para obterer una posicion aleatoria
    let amigoSeleccionado = obtenerPosicionAleatoria(amigos.length);
    elementoParaAmigoSeleccionado.innerHTML = "<li>" + amigos[amigoSeleccionado] + "</li>";
}

// Funcion para poder seleccionar un amigo del arreglo
const obtenerPosicionAleatoria = (numeroTotalAmigos) => {
    return Math.floor(Math.random() * numeroTotalAmigos);
}