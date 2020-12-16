//Ir a crear al presionar imagen +
img_crear = document.getElementById('img_crear')
img_crear.addEventListener('click', function (event) {
    event.preventDefault()
    body = document.getElementById('body');
    body.classList.remove('favoritos')
    body.classList.remove('mis_gif')

    if (body.classList.contains('crear')) {
        body.classList.remove('crear')

    } else {
        body.classList.add('crear')
    }
})

// permisos para acceder a la camara
comenzar = document.getElementById('comenzar_crear')
comenzar.addEventListener('click', () => {
    getStreamAndRecord()
})

async function getStreamAndRecord() {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 }
        }
    })
        .then(function (stream) {
            video.srcObject = stream;
            video.play()
        })

}

// Grabar

    recorder = await RecordRTC(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
        console.log('started')
        },
        });


   
grabar = document.getElementById('comenzar_grabar')
grabar.addEventListener('click', ()=>{
    grabar_detener()
    recorder.startRecording();
})    