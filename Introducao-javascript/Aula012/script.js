let primeiroNumero = document.querySelector("#primeiroNumero")
let segundoNumero = document.querySelector("#segundoNumero")
let btnSoma = document.querySelector("#btnSoma")

function soma() {
    let resultado = Number(primeiroNumero.value) + Number (segundoNumero.value)
    alert (resultado)
}

btnSoma.addEventListener("click", soma)