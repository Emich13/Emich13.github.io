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



//Modo nocturno-----------------------------------------------
dark = document.getElementById("nocturno")

dark.addEventListener('click', (event) => {
    event.preventDefault()
    body = document.getElementById('body')
    body.classList.add("dark_body")
})