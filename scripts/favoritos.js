//Agrego evento al link "favoritos"
//al hacer click agrego o quito clase

favoritos = document.getElementById('link_favoritos')
favoritos.addEventListener('click', function (event) {
    event.preventDefault()
    body = document.getElementById('body');
    body.classList.remove('mis_gif')
    if (body.classList.contains('favoritos')) {
        body.classList.remove('favoritos')
        
    } else {
        body.classList.add('favoritos')
    }
})

//Mostrar elementos guardados en el localstorage
/* function mostrarGifFavoritos(){
    for (let index = 0; index < fav_url.length; index++) {
        cont_favoritos = document.getElementById('cont-favoritos')
        imagen = document.createElement('img');
        imagen.classList.add('foto_gif')
        gif_favo = localStorage.getItem("array_fav")
        console.log(gif_favo)
        imagen.setAttribute('src',gif_favo);
        cont_favoritos.append(imagen)
        
    }
    
} */


//Modo nocturno-----------------------------------------------
dark = document.getElementById("nocturno")

dark.addEventListener('click', (event) => {
    event.preventDefault()
    body = document.getElementById('body')
    body.classList.add("dark_body")
})