
// hace llamada a la Api para mostrar sección Trendings----------------

function getTrendings() {
    var url = 'https://api.giphy.com/v1/gifs/trending?api_key=LbAHC6eAkm7KWtrPTyjps8Ul4z9eFqmJ&limit=3&rating=g&offset=' + offest;
    var array_fav = []

    fetch(url)
        .then(response => response.json())
        .then(function (info) {

            for (let index = 0; index < info.data.length; index++) {
                img = info.data[index].images.downsized_large.url;

                imagen = document.createElement('img');
                imagen.classList.add('trend-gif-img')
                imagen.setAttribute('src', img);

                var fav_img = "assets/icon-fav-active.svg";
                var down_img = "assets/icon-download.svg";
                var max_img = "assets/icon-max.svg";

                fav = document.createElement('img')
                fav.classList.add('hide', 'fav')
                fav.setAttribute('src', fav_img);
                fav.id = index

                fav.addEventListener('click',  () => {
                    var userSelection = document.getElementById(index)
                    fav_url = userSelection.previousSibling.src
                    console.log(fav_url)
                    array_fav.push(fav_url)
                    console.log(array_fav)
                    localStorage.setItem("array_fav", JSON.stringify(array_fav))

                   
                })

                down = document.createElement('img')
                down.classList.add('hide', 'down')
                down.setAttribute('src', down_img);

                max = document.createElement('img')
                max.classList.add('hide', 'max')
                max.setAttribute('src', max_img);

                div = document.createElement('div')
                div.classList.add('fav-down-max')
                div.append(imagen, fav, down, max)

                cont = document.getElementById('img_gif')
                cont.append(div)


            }
        })
}
getTrendings();

//Genero iconos dentro de GIF
 function icons() {
    var fav_img = "assets/icon-fav-active.svg";
    var down_img = "assets/icon-download.svg";
    var max_img = "assets/icon-max.svg";

    fav = document.createElement('img')
    fav.classList.add('hide', 'fav')
    fav.setAttribute('src', fav_img);
    

    down = document.createElement('img')
    down.classList.add('hide', 'down')
    down.setAttribute('src', down_img);

    max = document.createElement('img')
    max.classList.add('hide', 'max')
    max.setAttribute('src', max_img);

    div = document.createElement('div')
    div.classList.add('fav-down-max')
    div.append(imagen, fav, down, max)

    var userSelection = document.getElementsByClassName('fav');
     console.log("1ro")
    console.log(userSelection) 

    for (var i = 0; i < userSelection.length; i++) {
        (function (index) {
                userSelection[index].addEventListener("click", function () {
                var url_fav = userSelection[index].previousSibling.src;
                console.log(url_fav)
                localStorage.setItem('url_fav', url_fav)
            })
        })(i);
    }


} 




//Guardar gif en sección favoritos-----------------------------







//carrusel----------------------------------------------

var offest = 0;

function offset_right() {
    var contenedor = document.getElementById('img_gif')
    var right = document.getElementById('right')
    right.addEventListener('click', () => {
        contenedor.innerHTML = '';
        offest += 3
        getTrendings();
    })
}

offset_right();

function offset_left() {
    var contenedor = document.getElementById('img_gif')
    var right = document.getElementById('left')
    right.addEventListener('click', () => {
        contenedor.innerHTML = '';
        if (offest > 0) {

            getTrendings();
            offest -= 3

        } else {
            getTrendings();
        }

    })
}

offset_left();