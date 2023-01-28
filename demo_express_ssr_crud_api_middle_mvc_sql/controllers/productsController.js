// Controlador - Lógica de negocio de la app
const products = require('../models/products');
const mongoose = require('mongoose');
const Provider = require('../models/provider');
// const Products = require('../models/products');


const getProducts = async (req,res) => {

    try {
            let product = await products.find({products},{_id:0,__v:0})//.populate('providers', '- id_ - __v')
            res.status(200).json(product); // Respuesta de la API para muchos productos
        } catch(err){
            res.status(400).json({msj: err.message});
    }
}


//OBJETO PARA PROBAR EL POST PRODUCTS
// {
//     "title": "Banco de pesas",
//     "price": 150,
//     "description": "Para poder realizar mayor variabilidad de ejercicios",
//     "provider": "Equipamiento Deportivo S.L"
//   }

const createProduct = async (req,res) => {
const company_id = await Provider.findOne({company_name: req.body.provider}, '_id' )
console.log(company_id)
// const company_name_id
  const newProduct = req.body
  newProduct.provider = company_id
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
//OBJETO PARA PROBAR EL DELETE PRODUCTS
// {
//     "title":"Tubos de escape"
//   }



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

//OBJETO PARA PROBAR EL PUT PRODUCTS
// {
//     "title": "Piruletas",
//     "price": 32340,
//     "description": "producto actualizado"
//     }

const updateProducts = async (req, res) => {

    const { title, price, description } = req.body


    try {
        const productUpdate = await products.findOneAndUpdate({ title: title }, { price: price, description: description})
        res.status(200).json({
            msj: `EL producto ${title} ha sido actualizado.`,
        })

    } catch (err) {

        res.status(400).json({ msj: err.message })

    }



}

module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProducts
}
