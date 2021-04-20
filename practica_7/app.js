const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/menu', (req, res) => res.send('Estás en el menu de la bestia!'))


app.get('/contacto', (req, res) => res.send('809-000-0000 Este es el contacto de la bestia!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))