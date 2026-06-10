let botaoMudarTexto = document.querySelector("#btnMudarTexto")
let titulo = document.querySelector("#titulo")

function mudaTexto(){
    titulo.innerHTML = "Elton Da Silva Paz"

}

botaoMudarTexto.addEventListener("click", mudaTexto)