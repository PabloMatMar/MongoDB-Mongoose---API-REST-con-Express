const express = require('express')
// require('dotenv').config()
require('./utils/db_mongo')
const error404 = require('./middlewares/error404')

// Módulos de Rutas
const productsRoutes = require('./routes/productsRoutes')


const app = express()
const port = 3000



// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    const calc = calculator.add(2, 2);
    //res.send(`Hello World! La suma es ${suma}`)
    res.render('content', { msj: "The Bridge", calc })
})

//Rutas 
// app.use('/books',booksRoutes); // Books
app.use('/products',productsRoutes); // Rutas web products
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log("Estoy a tope en el puerto 3000")
})