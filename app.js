const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
});

// app.listen("3000", () => {console.log("Servidor Funcando...")});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log(`Servidor corriendo en el puerto ${PORT}`));