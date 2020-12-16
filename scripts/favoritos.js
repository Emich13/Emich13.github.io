//Agrego evento al link "favoritos"
//al hacer click agrego o quito clase

favoritos = document.getElementById('link_favoritos')
favoritos.addEventListener('click', function (event) {
    event.preventDefault()
    body = document.getElementById('body');
    body.classList.remove('mis_gif')
    body.classList.remove('crear')
    if (body.classList.contains('favoritos')) {
        body.classList.remove('favoritos')

    } else {
        body.classList.add('favoritos')
    }
})

//Mostrar elementos guardados en el localstorage
function mostrarGifFavoritos() {
    cont_favoritos = document.getElementById('cont-favoritos')
    gif_favo = JSON.parse(localStorage.getItem("array_fav"))
    
    for (let index = 0; index < gif_favo.length; index++) {
       /*  console.log('get + ',gif_favo) */
        imagen = document.createElement('img');
        imagen.classList.add('foto_gif')
        imagen.setAttribute('src', gif_favo[index]);
        cont_favoritos.append(imagen)
    }


}
mostrarGifFavoritos()

