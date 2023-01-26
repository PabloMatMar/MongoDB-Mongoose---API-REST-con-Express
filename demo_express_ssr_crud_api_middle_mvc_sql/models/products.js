const mongoose = require('mongoose');
require('../utils/db_mongo')//conectarse a la BBDD

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


// // Insertar un producto
// const p = new Products({
//     id: 5,
//     title: "Camisa de las caras",
//     price: 200,
//     description: "No hay quien la planche bien",
//     Providers: "Ropa de caballero S. L"
// });

// p.save().then((data)=>console.log(data));





// const products = require('./providersSchema')


// const createProduct = async (title, price, description, provider) => {
//     const product = new products({
//         title,
//         price,
//         description,
//         provider
//     });

//     const result = await product.save();
//     return result;
// }

// const listProducts = async () => {
//     const allProduct = await products.find({})
//     return allProduct

// }

// const productsModel = {
//     createProduct,
//     listProducts
// }

// module.exports = productsModel

// createProvider('Nintendo', true, 'https://www.nintendo.com/');