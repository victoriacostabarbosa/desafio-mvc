import { Router } from 'express';
import {
    listarJogos,
    buscarPorID,
    buscarPorFabricante,
    buscarPorAno,
    criarJogo,
    atualizarInf,
    removerJogo
} from '../controllers/jogoController.js';

const router = Router();

router.get('/', listarJogos);
router.get('/fabricante/:fabricante', buscarPorFabricante);
router.get('/ano/:anolanc', buscarPorAno);
router.get('/:id', buscarPorID);
router.post('/', criarJogo);
router.put('/:id', atualizarInf);
router.delete('/:id', removerJogo);

export default router;