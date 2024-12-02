const express = require('express');
const pool = require('./database');  
const path = require('path');

const app = express();

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página principal (HTML estático)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para fornecer os dados dos alunos
app.get('/api/alunos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM agenda');
    res.json(result.rows); // Retorna os dados como JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao carregar dados');
  }
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
