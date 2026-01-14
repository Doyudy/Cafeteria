const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")
const  manutençao = document.querySelector(".manutençao")

function mostrarModal() {
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal() {
    modal.style.left = '-40%'
    mascara.style.visibility = 'hidden'
}

function sintoMuito() {
    alert("Desculpe está opção está em desenvolvimento")
}