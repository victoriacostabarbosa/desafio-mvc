import * as jogoModel from '../models/jogoModel.js';

export const listarJogos = (req, res) => {
    const jogos = jogoModel.listarJogos();
    res.status(200).json(jogos);
};

export const buscarPorID = (req, res) => {
    const id = parseInt(req.params.id);
    const jogo = jogoModel.buscarPorID(id);

    if (jogo) {
        res.status(200).json(jogo);
    } else {
        res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado`
        });
    }
};

export const buscarPorFabricante = (req, res) => {
    const fabricante = req.params.fabricante.trim();
    const jogosFabricante = jogoModel.buscarPorFabricante(fabricante);

    if (jogosFabricante.length > 0) {
        res.status(200).json(jogosFabricante);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado com esse fabricante: ${fabricante}`
        });
    }
};

export const buscarPorAno = (req, res) => {
    const anolanc = parseInt(req.params.anolanc);
    const jogosAno = jogoModel.buscarPorAno(anolanc);

    if (jogosAno.length > 0) {
        res.status(200).json(jogosAno);
    } else {
        res.status(404).json({
            mensagem: `Nenhum jogo encontrado lançado em ${anolanc}`
        });
    }
};

export const criarJogo = (req, res) => {
    const { nome, fabricante, idademin, anolanc } = req.body;

    if (!nome || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nome, fabricante, idademin, anolanc) são obrigatórios.'
        });
    }

    const novoJogo = jogoModel.criarJogo({ nome, fabricante, idademin, anolanc });
    res.status(201).json(novoJogo);
};

export const atualizarInf = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, fabricante, idademin, anolanc } = req.body;

    if (!nome || !fabricante || idademin === undefined || anolanc === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (nome, fabricante, idademin, anolanc) devem ser informados.'
        });
    }

    const jogoAtualizado = jogoModel.atualizarInf(id, { nome, fabricante, idademin, anolanc });

    if (!jogoAtualizado) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para atualização.`
        });
    }

    res.status(200).json(jogoAtualizado);
};

export const removerJogo = (req, res) => {
    const id = parseInt(req.params.id);
    const jogoRemovido = jogoModel.removerJogo(id);

    if (!jogoRemovido) {
        return res.status(404).json({
            mensagem: `Jogo com ID ${id} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Jogo com ID ${id} removido com sucesso.`,
        jogo: jogoRemovido
    });
};