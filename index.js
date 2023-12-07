const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const dbConfig = {
  user: 'lateadmin',
  password: 'Escalera082003.',
  server: 'latesql.database.windows.net',
  database: 'PROYECTO',
};

sql.connect(dbConfig)
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
