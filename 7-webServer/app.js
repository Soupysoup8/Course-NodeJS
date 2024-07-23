require("dotenv").config()
const express = require("express");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT;

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials", (err) => {})

// Svir contendio estatico
app.use(express.static("public"))

/*
app.get("*", function (req, res){
    res.sendFile( __dirname + "/public/404.html");
})
*/

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Meow",
        titulo: "Curso de Node"
    });
});

app.get("/generic", (req, res) => {
    res.render('generic', {
        nombre: "Meow",
        titulo: "Curso de Node"
    });
})

app.get("/elements", (req, res) => {
    res.render('elements', {
        nombre: "Meow",
        titulo: "Curso de Node"
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${ port }`);
})