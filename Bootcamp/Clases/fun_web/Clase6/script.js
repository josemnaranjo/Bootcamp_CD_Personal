function addComment(event) {
    event.preventDefault();

    //capturar comentario de usuario
    let areaComentario = document.querySelector(".areaComentario");
    let comentarioUsuario = areaComentario.value;

    //creación de divs para comentarios
    let commentContainer = document.querySelector(".comments-container");
    let divRow = document.createElement("div");
    let divColumn = document.createElement("div");
    let parrafo = document.createElement("p");
    let comentarioText = document.createTextNode(comentarioUsuario);
    let iconErase = document.createElement("img");

    //agregar icono de basurero a los twitts
    iconErase.src="assets/trash-solid.svg"

    //anidación de nodos
    parrafo.appendChild(comentarioText);
    parrafo.appendChild(iconErase);
    divColumn.appendChild(parrafo);
    divRow.appendChild(divColumn);
    commentContainer.prepend(divRow);
    

    //limpiar textarea
    areaComentario.value = " ";

    //agregar estilos a divs
    divRow.classList.add("row");
    divColumn.classList.add("col");

    //eliminar twitt al hacer click en basurero
    iconErase.onclick = function() {
        divRow.remove();
    }

}