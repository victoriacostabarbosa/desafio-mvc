export const jogos = [
    { id: 1, nome: "GTA VI", fabricante: "RockStar", idademin: 18, anolanc: 2026 },
    { id: 2, nome: "The Last of Us Part II", fabricante: "Naughty Dog", idademin: 18, anolanc: 2020 },
    { id: 3, nome: "Minecraft", fabricante: "Mojang", idademin: 10, anolanc: 2011 },
    { id: 4, nome: "The Legend of Zelda: Breath of the Wild", fabricante: "Nintendo", idademin: 12, anolanc: 2017 },
    { id: 5, nome: "God of War Ragnarök", fabricante: "Santa Monica Studio", idademin: 18, anolanc: 2022 }
]

export const listarJogos = () => {
    return jogos
}

export const buscarPorID = (id) => {
    return jogos.find (j => j.id === id)
}

export const buscarPorFabricante = (fabricante) => {
    return jogos.filter(j => j.fabricante.toLowerCase() === fabricante.toLowerCase())
}

export const buscarPorAno = (anolanc) => {
    return jogos.filter (j => j.anolanc === anolanc)
}

export const criarJogo = ({nome, fabricante, idademin, anolanc}) => {
    const novoJogo = {
        id: jogos.length + 1,
        nome,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    }

    jogos.push(novoJogo)
    return novoJogo
}

export const atualizarInf = (id, {nome, fabricante, idademin, anolanc}) => {
    const index = jogos.findIndex(j => j.id === id)
    if (index === -1) return null;

    jogos[index] = {
        id,
        nome,
        fabricante,
        idademin: parseInt(idademin),
        anolanc: parseInt(anolanc)
    }

    return jogos[index]
}

export const removerJogo = (id) => {
    const index = jogos.findIndex(p => p.id === id)
    if (index === -1) return null

    const [jogoRemovido] = jogos.splice (index, 1)
    return jogoRemovido
}

