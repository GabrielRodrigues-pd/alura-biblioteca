// Express
import app from './src/app.js';

// PORT para escutar as requisicoes
const PORT = process.env.PORT || 3000;

// Lincar a porta com o server
app.listen(PORT, err => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
