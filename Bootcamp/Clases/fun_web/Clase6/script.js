
//funcionalidad: agregar comentarios y borrar 

function addComment(event) {
    event.preventDefault();

    //capturar comentario de usuario
    let areaComentario = document.querySelector(".areaComentario");
    let comentarioUsuario = areaComentario.value;

    //como evito que se agreguen comentarios vacios, sin importar la cantidad espacios en blanco que se agreguen
    
        //creación de divs para comentarios
        let commentContainer = document.querySelector(".comments-container");
        let divRow = document.createElement("div");
        let divColumn = document.createElement("div");
        let parrafo = document.createElement("p");
        let comentarioText = document.createTextNode(comentarioUsuario);
        let iconErase = document.createElement("img");
        let iconEdit = document.createElement("img");
    
        //agregar icono de basurero a los twitts
        iconErase.src="assets/trash-solid.svg"
        iconEdit.src ="assets/pen-to-square-solid.svg"
    
        //anidación de nodos (desde el más interior hacia afuera)
        parrafo.appendChild(comentarioText);
        parrafo.appendChild(iconErase);
        parrafo.appendChild(iconEdit);
        divColumn.appendChild(parrafo);
        divRow.appendChild(divColumn);
        commentContainer.prepend(divRow);
        
    
        //limpiar textarea
        areaComentario.value = "";
    
        //agregar estilos a divs
        divRow.classList.add("row");
        divColumn.classList.add("col");
    
        //eliminar twitt al hacer click en basurero
        iconErase.onclick = ()=> {
            divRow.remove();
        }
        //funcion de edicion cuando se hace click en icono edicion
        iconEdit.onclick = ()=> {
            
            let divColumn2 = document.createElement("div");
            let input = document.createElement("input");
            

            divColumn2.classList.add("col2");
            input.setAttribute("type","text");


            divColumn2.appendChild(input);
            divRow.appendChild(divColumn2);


    
    
        };


}


