import express from 'express'
import jogoRoutes from './routes/jogoRoutes.js'

const app = express();
const PORT = 3000;

app.use(express.json())

app.use('/jogos', jogoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

