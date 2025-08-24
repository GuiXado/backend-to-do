import express from 'express';
import sql from './db/db';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Node + Express + TypeScript funcionando!');
});

// Endpoint para testar conexão com o banco
app.get('/test-db', async (req, res) => {
  try {
    const result = await sql`SELECT NOW()`;
    res.json({ dbTime: result[0].now });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao conectar ao banco', details: error });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});