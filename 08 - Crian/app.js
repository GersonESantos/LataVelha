// Import the express library
const express = require('express');
// App
const app = express();

app.get('/', (req, res) => {
    res.write('Hello World!');
    res.end();
});

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });