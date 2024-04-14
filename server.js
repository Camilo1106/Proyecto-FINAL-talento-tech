const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/quote', (req, res) => {
  const { firstName, lastName, company, email, phoneNumber, message, agreed } = req.body;
  const quoteData = {
    firstName,
    lastName,
    company,
    email,
    phoneNumber,
    message,
    agreed,
  };

  // Guardar los datos de la cotización en un archivo JSON
  fs.readFile('quotes.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo quotes.json:', err);
      res.status(500).send('Error al guardar la cotización');
      return;
    }

    let quotes = [];
    if (data) {
      quotes = JSON.parse(data);
    }

    quotes.push(quoteData);

    fs.writeFile('quotes.json', JSON.stringify(quotes, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error al guardar la cotización en quotes.json:', err);
        res.status(500).send('Error al guardar la cotización');
      } else {
        console.log('Cotización guardada correctamente en quotes.json');
        res.status(200).send('Cotización guardada correctamente');
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
