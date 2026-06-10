let filmes = [
    "O Hobbit",
    "Dragon ball Z",
    "Homem Aranha",
    "Intocaveis",
    "jujutsu kaisen 0"
]

for (let i = 0; i < 10; i++) {
     let nomeFilme = prompt(`Digite o nome do filme ${i + 1}:`);
    filmes.push(nomeFilme);
}

alert("Sua lista de filmes:\n" + filmes.join("\n"));
