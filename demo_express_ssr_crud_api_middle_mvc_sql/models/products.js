const mongoose = require('mongoose');
// require('../utils/db_mongo')//conectarse a la BBDD

const objectSchema = {
    
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    providers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Providers'
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Products = mongoose.model('Products', productSchema);

module.exports = Products;



// validate: {
//     validator: function(url){
//         if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
//             return true;
//         else {
//             return false;
//         }


// Insertar un producto
// const p = new Product({
//     title: "Tortilla",
//     price: 1.80,
//     description: "Tortilla jugosa del teatro",
//     providers: "63d1659d77e8d2811573eafd"
// });

// p.save().then((data)=>console.log(data));


// const mongoose = require('mongoose');

// // mongoose.connect('mongodb://127.0.0.1:27017/fakeshop')
// //     .then(() => console.log('Now connected to MongoDB!'))
// //     .catch(err => console.error('Something went wrong', err));

// const providers = mongoose.model('Publisher', new mongoose.Schema({
//     companyName: String,
//     CIF: String,
//     address: String,
//     website: String
// }));

// const products = mongoose.model('Game', new mongoose.Schema({
//     title: String,
//     price: Number,
//     description: String

// }));

// async function createProvider(companyName, CIF, address, website) {
//     const provider = new Publisher({
//         companyName,
//         CIF,
//         address,
//         website
//     });

//     const result = await provider.save();
//     console.log(result);
// }

// async function createProduct(title, price, description, publisher) {
//     const product = new Game({
//         title,
//         price,
//         description,
//         publisher
//     });

//     const result = await product.save();
//     console.log(result);
// }

// async function listProducts() {
//     const products = await products
//         .find()
//         .select('title');
//     console.log(products);
// }

// createPublisher('Nintendo', true, 'https://www.nintendo.com/');