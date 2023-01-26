const express = require('express')
// require('dotenv').config()
require('./utils/db_mongo')
const error404 = require('./middlewares/error404')

// Módulos de Rutas
const productsRoutes = require('./routes/productsRoutes');
const providersRoutes = require('./routes/providersRoutes');


const app = express()
const port = 3000

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');



// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/providers', providersRoutes);
app.use('/products', productsRoutes);


app.get('/', (req, res) => {
    res.json({msg: "hola"})
})

//Rutas 
// app.use('/books',booksRoutes); // Books
app.use('/products',productsRoutes); // Rutas web products
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log("Estoy a tope en el puerto 3000")
})