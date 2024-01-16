const express = require("express")
const app = express();
const path = require("path");
const port = 3030;

app.use(express.static('public'));//sirve archivos estáticos//
// con éste codigo conecto los nav //
app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'));
});
app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/contact.html'));
});
app.get('/music', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/music.html'));
});
app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/about.html'));
});
app. listen(port,()=> console.log(`http://localhost:${port}`))

/*INICIO EL SERVIDOR CON npm y- luego npm i express*/
/*PARA LEVANTAR EL SERVIDOR LUEGO DEL CLONADO npm install y luego nodemon*/ 