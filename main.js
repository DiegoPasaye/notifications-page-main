const marcador = document.querySelector(".marcador")
const notificacion1 = document.querySelector(".first-notification")
const notificacion2 = document.querySelector(".second-notification")
const notificacion3 = document.querySelector(".third-notification")
const redCircle1 = document.querySelector(".circulo1")
const redCircle2 = document.querySelector(".circulo2")
const redCircle3 = document.querySelector(".circulo3")

const marcar = () => {
    console.log("hola")
    notificacion1.style.background = "white"
    notificacion2.style.background = "white"
    notificacion3.style.background = "white"
    redCircle1.style.display = "none"
    redCircle2.style.display = "none"
    redCircle3.style.display = "none"
}

marcador.addEventListener("click", marcar)