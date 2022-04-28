const express = require('express');
const app = express(); //el modulo express sirve para el armado del servidor
const path = require('path'); //el modulo path sirve para unir los directorios

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //podemos usar archivos .html en vez de .ejs procesados por ejs
app.set('view engine', 'ejs');
//middlewares


//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public'))); //para acceder a los archivos de la carpeta desde el navegador

//listening the server
const port = app.get('port');

app.listen(port, ()=>{
    console.log('Server on port', port);
})