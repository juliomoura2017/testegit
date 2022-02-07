const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send({ message: 'Ola mundo estou funcionando!' });
})

app.get('/ola', (req, res) => {
	res.status(200).send({ message: 'Oi eu sou o Ola' });
})

app.listen(3001, () => {
	console.log('Api rodando na porta 3001');
})
