// Controlador - Lógica de negocio de la app
const products = require('../models/products');
const mongoose = require('mongoose');
const Providers = require('../models/providers');
// const Products = require('../models/products');


const getProducts = async (req,res) => {

    try {
                let product = await products.find({products},{_id:0,__v:0})//.populate('providers', '- id_ - __v')
                res.status(200).json(product); // Respuesta de la API para muchos productos
        }
        catch(err){
                res.status(400).json({msj: err.message});
        }
}


//objeto para crear producto
// {
//     "title": "dsdsdsadslsojdddsdsdsd",
//     "price": 100,
//     "description": "djskjdjliasjdaj",
//     "provider": "Equipamiento Deportivo S.L"
//   }

const createProduct = async (req,res) => {
    const company_name_id = await Providers.findOne({company_name: req.body.provider}, '_id' ).exec()
    // const company_name_id
    const newProduct = req.body
    newProduct.provider = company_name_id
    console.log(newProduct)
  try{

    let response = await new products(newProduct);
    let answer = await response.save();
    // objeto de vuelta de guardar en la bbdd
    console.log("Este es el console.log de lo que devuelve la api", answer);

    res.status(201).json({
        msj: `Producto ${answer.title} guardado en el sistema.`,
        "product": answer
    });}catch(err) {
        ('Este es el error que devuelve la api' + err);

        res.status(400).json({msj: err.message})
    }
}

const deleteProduct = async (req,res)=>{
    const {title} = req.body
    const productExist = await products.find({title: title})
    const productEraser = await products.findOne({title: title}).exec()



        if(productExist === productEraser) {
            let response = await products.deleteOne(productEraser); 
            console.log("Este es el console.log de lo que se va a eliminar de la api", response);
            res.status(201).json({
                msj: `Producto ${title} eliminado del sistema.`,
                "product": productEraser     });
            
        } else {
            res.status(201).json({msj: `Producto ${productEraser} no encontrado en el sistema.`})
        }

}
module.exports = {
    getProducts,
    createProduct,
    deleteProduct
    //editProduct,
    
}

// OTRA MANERA

// const products = {
//     getProducts: async (req, res) => {
//         if (req.params.id) {
//             try {
//                 let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
//                 let products = await response.json(); //{}
//                 res.render('products', { "products": [products] }); // Pinta datos en el pug
//             }
//             catch (error) {
//                 console.log(`ERROR: ${error.stack}`);
//             }
//         } else {
//             try {
//                 let response = await fetch(`https://fakestoreapi.com/products`); // []
//                 let products = await response.json(); // []
//                 res.render('products', { products }); // Pinta datos en el pug
//             }
//             catch (error) {
//                 console.log(`ERROR: ${error.stack}`);
//             }
//         }
//     },
//     createProduct: async (req, res) => {
//         console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
//         const newProduct = req.body; // {} nuevo producto a guardar
    
//         // Líneas
//         //para guardar 
//         // en una BBDD SQL o MongoDB
    
//         let response = await fetch('https://fakestoreapi.com/products', {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newProduct)
//         })
//         let answer = await response.json(); // objeto de vuelta de la petición
//         console.log("Este es el console.log de lo que devuelve la api",answer);
    
//         res.send(`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`);
//     },
//     deleteProduct: async (req, res) =>  console.log("Borrando pruducto"),
//     editProduct: async (req, res) =>  console.log("Borrando pruducto")
// }

// module.exports = products;
