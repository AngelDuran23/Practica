const express = require('express')
const app = express()
const port = 3000


app.use(express.static('pagina'));
app.get('/home', (req, res) => res.sendFile(__dirname + "/pagina/inicio.html"))



app.get('/about', (req, res) =>  res.sendFile(__dirname + "/pagina/servicios.html"))

app.get('/contact', (req, res) =>  res.sendFile(__dirname + "/pagina/contactos.html"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))