// ── Elementos do DOM ──────────────────────────────────────
const divListaFilme = document.querySelector("#lista_filmes")
const botoes = document.querySelectorAll("button")

// ── Lista de filmes ───────────────────────────────────────
const filmes = [

    // TERROR (10)
    { titulo: "Invocação do Mal", sinopse: "Investigadores enfrentam forças malignas em uma casa assombrada.", genero: "Terror" },
    { titulo: "Hereditário", sinopse: "Uma família descobre segredos sombrios após a morte da avó.", genero: "Terror" },
    { titulo: "O Exorcista", sinopse: "Uma garota é possuída e passa por um exorcismo aterrorizante.", genero: "Terror" },
    { titulo: "It: A Coisa", sinopse: "Um palhaço maligno assombra crianças em uma pequena cidade.", genero: "Terror" },
    { titulo: "Corral", sinopse: "Um jovem descobre segredos perturbadores ao visitar a família da namorada.", genero: "Terror" },
    { titulo: "A Bruxa", sinopse: "Uma família enfrenta forças sobrenaturais em uma floresta isolada.", genero: "Terror" },
    { titulo: "O Iluminado", sinopse: "Um homem enlouquece em um hotel isolado.", genero: "Terror" },
    { titulo: "Atividade Paranormal", sinopse: "Eventos estranhos são registrados em uma casa.", genero: "Terror" },
    { titulo: "Pânico", sinopse: "Um assassino mascarado aterroriza adolescentes.", genero: "Terror" },
    { titulo: "Annabelle", sinopse: "Uma boneca possuída causa terror a um casal.", genero: "Terror" },

    // AÇÃO (10)
    { titulo: "Velozes e Furiosos", sinopse: "Corridas ilegais e crimes em alta velocidade.", genero: "Ação" },
    { titulo: "John Wick", sinopse: "Um assassino busca vingança após perder tudo.", genero: "Ação" },
    { titulo: "Mad Max: Estrada da Fúria", sinopse: "Uma fuga frenética em um mundo pós-apocalíptico.", genero: "Ação" },
    { titulo: "Gladiador", sinopse: "Um general busca vingança como gladiador.", genero: "Ação" },
    { titulo: "Missão Impossível", sinopse: "Agente enfrenta missões perigosas ao redor do mundo.", genero: "Ação" },
    { titulo: "Matrix", sinopse: "Um hacker descobre a verdade sobre a realidade simulada.", genero: "Ação" },
    { titulo: "Homem de Ferro", sinopse: "Bilionário cria uma armadura para combater o crime.", genero: "Ação" },
    { titulo: "Batman: O Cavaleiro das Trevas", sinopse: "Batman enfrenta o Coringa pelo destino de Gotham.", genero: "Ação" },
    { titulo: "Duro de Matar", sinopse: "Policial enfrenta terroristas em um arranha-céu.", genero: "Ação" },
    { titulo: "Top Gun: Maverick", sinopse: "Piloto veterano treina novos recrutas em missão perigosa.", genero: "Ação" },

    // COMÉDIA (10)
    { titulo: "Gente Grande", sinopse: "Amigos se reencontram após anos.", genero: "Comédia" },
    { titulo: "Todo Mundo em Pânico", sinopse: "Paródia hilária de filmes de terror.", genero: "Comédia" },
    { titulo: "Debi & Lóide", sinopse: "Dois amigos atrapalhados vivem situações absurdas.", genero: "Comédia" },
    { titulo: "Click", sinopse: "Homem controla sua vida com um controle remoto mágico.", genero: "Comédia" },
    { titulo: "O Máskara", sinopse: "Homem tímido ganha poderes com uma máscara mágica.", genero: "Comédia" },
    { titulo: "Escola de Rock", sinopse: "Professor falso ensina rock para crianças.", genero: "Comédia" },
    { titulo: "Superbad", sinopse: "Adolescentes vivem aventuras antes da formatura.", genero: "Comédia" },
    { titulo: "Ace Ventura", sinopse: "Detetive excêntrico investiga desaparecimento de animais.", genero: "Comédia" },
    { titulo: "Se Beber, Não Case!", sinopse: "Amigos tentam lembrar o que aconteceu após uma noite louca.", genero: "Comédia" },
    { titulo: "Os Caça-Fantasmas", sinopse: "Cientistas abrem uma agência para capturar fantasmas.", genero: "Comédia" },

    // SUSPENSE (10)
    { titulo: "Psicose", sinopse: "Uma fugitiva para em um motel com segredos obscuros.", genero: "Suspense" },
    { titulo: "O Silêncio dos Inocentes", sinopse: "Agente do FBI usa a ajuda de um serial killer para capturar outro.", genero: "Suspense" },
    { titulo: "Garota Exemplar", sinopse: "O desaparecimento de uma mulher revela segredos do casamento.", genero: "Suspense" },
    { titulo: "Janela Indiscreta", sinopse: "Fotógrafo imobilizado acredita ter testemunhado um assassinato.", genero: "Suspense" },
    { titulo: "O Sexto Sentido", sinopse: "Um menino afirma ver espíritos e busca ajuda de um psicólogo.", genero: "Suspense" },
    { titulo: "Shutter Island", sinopse: "Um detetive investiga o desaparecimento de uma paciente em um manicômio.", genero: "Suspense" },
    { titulo: "Zodíaco", sinopse: "Jornalistas e policiais tentam identificar um assassino em série.", genero: "Suspense" },
    { titulo: "A Caça", sinopse: "Um homem é falsamente acusado em uma pequena cidade.", genero: "Suspense" },
    { titulo: "Desaparecida", sinopse: "Um pai busca desesperadamente por sua filha desaparecida.", genero: "Suspense" },
    { titulo: "Premonição", sinopse: "Uma mulher tenta impedir desastres que viu no futuro.", genero: "Suspense" },

    // AVENTURA (10)
    { titulo: "Indiana Jones", sinopse: "Arqueólogo enfrenta perigos em busca de relíquias.", genero: "Aventura" },
    { titulo: "Piratas do Caribe", sinopse: "Aventuras de piratas em alto-mar.", genero: "Aventura" },
    { titulo: "O Senhor dos Anéis", sinopse: "Heróis tentam destruir um anel poderoso.", genero: "Aventura" },
    { titulo: "Harry Potter", sinopse: "Jovem bruxo enfrenta forças do mal.", genero: "Aventura" },
    { titulo: "Jurassic Park", sinopse: "Dinossauros clonados causam caos em um parque.", genero: "Aventura" },
    { titulo: "Avatar", sinopse: "Humano explora um planeta alienígena.", genero: "Aventura" },
    { titulo: "As Crônicas de Nárnia", sinopse: "Crianças descobrem um mundo mágico.", genero: "Aventura" },
    { titulo: "Jumanji", sinopse: "Jogo misterioso traz perigos para o mundo real.", genero: "Aventura" },
    { titulo: "Homem-Aranha", sinopse: "Jovem ganha poderes e enfrenta vilões.", genero: "Aventura" },
    { titulo: "Star Wars", sinopse: "Conflito entre forças do bem e do mal no espaço.", genero: "Aventura" },
]

// ── Função que mostra os filmes na tela ───────────────────
function renderizar(lista) {
    divListaFilme.innerHTML = ""

    if (lista.length === 0) {
        divListaFilme.innerHTML = "<li>Nenhum filme encontrado.</li>"
        return
    }

    lista.forEach((filme) => {
        divListaFilme.innerHTML += `
      <li>
        <b>${filme.titulo}</b> <br>
        ${filme.sinopse} <br>
        Gênero: <i>${filme.genero}</i>
      </li>`
    })
}

// ── Função que filtra os filmes por gênero ────────────────
function filtrarFilmes(genero) {
    const filtrados = filmes.filter(filme => filme.genero === genero)
    renderizar(filtrados)
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const genero = botao.dataset.genero
        filtrarFilmes(genero)
    })
})
// ── Mostra todos os filmes ao carregar a página ───────────
renderizar(filmes)
