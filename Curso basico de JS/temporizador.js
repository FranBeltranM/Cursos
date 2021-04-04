window.onload = function () {
    var temporizador;
    var boton = document.querySelector('#boton');
    function temporizador1vez() {
        temporizador = setTimeout(() => {
            console.log("Ejecutador temporizado…");
        }, 2000);
    }

    function iniciarTemporizador() {
        temporizador = setInterval(() => {
            console.log("Temporizador ejecutandose…");
        }, 2000);
    }

    function pararTemporizador() {
        clearInterval(temporizador);
        console.log("Temporizador parado…");
    }

    iniciarTemporizador();

    boton.addEventListener('click', function () {
        console.log("Botón pulsado…");
        pararTemporizador();
    });
}
