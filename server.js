const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/metadata', async (req, res) => {
  try {
    const response = await fetch('https://srv7.streamingradio.ar/api/nowplaying/8120');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener metadata' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
