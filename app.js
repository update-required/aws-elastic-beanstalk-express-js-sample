const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('David is the Best AWS DevOps agent there is - this commit is different'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
