//Declaro variables

var api = 'https://api.giphy.com/v1/gifs/search?'
var api_autocomplete = 'https://api.giphy.com/v1/gifs/search/tags?'
var api_key = 'api_key=LbAHC6eAkm7KWtrPTyjps8Ul4z9eFqmJ'
var specific = '&limit=12&offset=0&rating=g&q='
var specific_tag = '&limit=4&offset=0&rating=g&q='
var tag_container = document.getElementById('tag_container')

// Al hacer click en lupa busca Gif
function setUp() {
    contenedor = document.getElementById('gif_gif')
    var btn = document.getElementById('search')
    btn.addEventListener('click', () => {
        contenedor.innerHTML = '';
        getSearch()
    })
}
setUp()

// Request a Api y muestro Gifs
function getSearch() {
    let input = document.getElementById('text').value
    var url = api + api_key + specific + input

    fetch(url)
        .then(response => response.json())
        .then(function (info) {
            for (let index = 0; index < info.data.length; index++) {
                img = info.data[index].images.downsized_large.url;
                imagen = document.createElement('img');
                imagen.setAttribute('src', img);

                //icons() viene de trending.js
                icons();

                cont = document.getElementById('gif_gif')
                cont.append(div)

                titulo = document.getElementById('titulo-search')
                titulo.innerText = input
            }
        })
}




//----------------TAGS-----------------------------------------------------

// Al entrar al input me muestra sugerencias
    let input = document.getElementById('text')
    input.addEventListener('input', function() {
        
        getTags(this.value);
    })



// Request a Api y muestro sugerencias
function getTags(busqueda) {

    var url = api_autocomplete + api_key + specific_tag + busqueda
    
    fetch(url)
        .then(response => response.json())
        .then(function (info) {
            showTags(info.data);
        })
}

function showTags(arrayTags){
    console.log(arrayTags)
     tag_container.innerHTML=''
    for (let index = 0; index < arrayTags.length; index++) {
        li = document.createElement('li')
        li.textContent = arrayTags[index].name

        li.addEventListener('click', function(){
            text.value = this.textContent
        })
        tag_container.append(li)
        
    } 
}