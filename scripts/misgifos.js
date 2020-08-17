//Agrego evento al link "MIs Gifos"
//al hacer click agrego o quito clase

link_misgifos = document.getElementById('link_misgifos')
link_misgifos.addEventListener('click', function (event) {
    event.preventDefault()
    body = document.getElementById('body');
    body.classList.remove('favoritos')
    if (body.classList.contains('mis_gif')) {
        body.classList.remove('mis_gif')
        body.classList.remove('favoritos')
    } else {
        body.classList.add('mis_gif')
    }
})