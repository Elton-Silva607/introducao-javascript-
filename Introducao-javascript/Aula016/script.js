let aprendizado = Number (prompt("Digite um numero para descobrir o que você aprendeu?"))

function seSenao() {
    let perguntaUsuario = prompt(`você estudou no feriado?
        sim ou não
    `)

    if (perguntaUsuario.toLowerCase() == "sim") {
        alert("parabens, você é o cara!!")
        return
    }

    alert ("Miguelou")
}


function daPraCriarUmaFuncaoDentroDeoutraFuncao() {
    function teste() {
        alert("teste")
    }
    teste()
}

function soma(primeiroNumero, SegundoNumero) {
    return primeiroNumero + SegundoNumero

}

function perguntaNumero() {
    let primeiroNumero = Number (prompt("Digite o primeiro numero"))
    let segundoNumero = Number (prompt("Digite o segundo numero"))

    alert (soma(primeiroNumero, segundoNumero))
}

switch (aprendizado) {
    case 1:
        seSenao()
        break;
    case 2:
        daPraCriarUmaFuncaoDentroDeoutraFuncao()
        break;
    case 3:
        perguntaNumero()
        break;
    default:
        alert("não existe esse caso")
        break;
}

