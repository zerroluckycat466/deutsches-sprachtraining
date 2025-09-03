const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// MongoDB Verbindung
mongoose.connect('mongodb://localhost/deutsches-sprachtraining', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden...'))
  .catch(err => console.log(err));

// Beispielroute
app.get('/', (req, res) => {
  res.send('Willkommen beim Deutschen Sprachtraining!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
