// Import the express library
const express = require('express');
// App
const app = express();

app.get('/', (req, res) => {
    res.write('Hello World!');
    res.end();
});

app.listen(port, () => {
    console.log(`Rodando app listening at http://localhost:${port}`);
  });

// Define the port
const port = 8080;

