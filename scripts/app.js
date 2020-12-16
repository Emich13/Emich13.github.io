//Modo nocturno-----------------------------------------------
dark = document.getElementById("nocturno")

dark.addEventListener('click', (event) => {
    event.preventDefault()
    body = document.getElementById('body')
    body.classList.add("dark_body")
})

// toggle text modo nocturno
function toggle_nocturno() {
    var x = document.getElementById("nocturno");
    x.addEventListener('click', (event) => {
        event.preventDefault()
        if (x.innerHTML === "Modo Nocturno") {
            x.innerHTML = "Modo Diurno";
        } else {
            x.innerHTML = "Modo Nocturno";
            body.classList.remove('dark_body')
        }
    })
}

toggle_nocturno()

//Ir a home al presionar imagen Gifos
home = document.getElementById('home')
home.addEventListener('click', function (event) {
    event.preventDefault()
    body = document.getElementById('body');
    body.classList.remove('favoritos')
    body.classList.remove('mis_gif')
    body.classList.remove('crear')
    body.classList.add('home')
})

