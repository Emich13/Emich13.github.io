//Declaro variables

var api              = 'https://api.giphy.com/v1/gifs/search?'
var api_autocomplete = 'https://api.giphy.com/v1/gifs/search/tags?'
var api_key          = 'api_key=LbAHC6eAkm7KWtrPTyjps8Ul4z9eFqmJ'
var specific         = '&limit=12&offset=0&rating=g&q='
var input;
var tag;
var li;
var ul;

// Al hacer click en lupa busca Gif
function setUp() {
    contenedor = document.getElementById('gif_gif')
    var btn = document.getElementById('search')
    btn.addEventListener('click', ()=>{
        contenedor.innerHTML = '';
        getSearch()
    })
}
setUp()

// Al entrar al input me muestra sugerencias

function getSugesttions(){
    var input = document.getElementById('text')
    input.addEventListener('input', ()=>{
        
        showSugesttions();
    })
}

getSugesttions();

// Request a Api y muestro Gifs
function getSearch() {
    input = document.getElementById('text').value
    var url = api + api_key + specific + input
    

    fetch(url)
        .then(response => response.json())
        .then(function (info) {
            for (let index = 0; index < info.data.length; index++) {
                img = info.data[index].images.downsized_large.url;
                imagen = document.createElement('img');
                imagen.setAttribute('src', img);
                cont = document.getElementById('gif_gif')
                cont.append(imagen)
                titulo = document.getElementById('titulo-search')
                titulo.innerText = input
            }
        })
}

// Request a Api y muestro sugerencias
function showSugesttions(){
    
        input = document.getElementById('text').value
        var url = api_autocomplete + api_key + specific + input
        
    
        fetch(url)
        
            .then(response => response.json())
            .then(function (info) {
                for (let index = 0; index < info.data.length; index++) {
                   let tag = info.data[index].name;
                   let li = document.createElement('li')
                    li.innerText = tag
                    console.log(li.innerText)
                    
                   //me falta apendear las sugerencias 
                    
                }
            })
    }
