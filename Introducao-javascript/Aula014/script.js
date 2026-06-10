let dinheiro = Number(prompt("digite o valor"))
alert (dinheiro.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})) 

