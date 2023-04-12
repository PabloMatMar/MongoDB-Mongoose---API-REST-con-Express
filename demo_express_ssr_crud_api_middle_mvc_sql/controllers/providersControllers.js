// Controlador - Lógica de negocio de la app
const provider = require('../models/provider');
const products = require('../models/products')
const mongoose = require('mongoose');

const getProviders = async (req, res) => {
    try {
        let allProviders = await provider.find({ provider }, { _id: 0, __v: 0 }); // []
        res.status(200).json(allProviders); // Respuesta de la API para muchos productos
    }
    catch (err) {
        res.status(400).json({ msj: err.message });
    }
}


//OBJETO PARA PROBAR EL POST PROVIDER

// { "company_name": "Piscinas S.L",
// "CIF": "T4543Kf3KKDDD",
// "address": "Poligono industrial La virgencita 124",
// "url_web": "https://Piscinas.com" }

const createProviders = async (req, res) => {
    console.log("Este es el objeto con las propiedades del provedor introducido:", req.body); // Objeto recibido de producto nuevo
    const newProviders = req.body; // {} nuevo producto a guardar

    // Líneas
    // para guardar 
    // en una BBDD SQL o MongoDB
    //para guardar en una bbdd mongoDB
    try {
        let response = await new provider(newProviders);
        let answer = await response.save();
        // objeto de vuelta de guardar en la bbdd
        console.log("Este es el console.log de lo que devuelve la api", answer);

        res.status(201).json({
            msj: `Provedor ${answer.company_name} guardado en el sistema con ID: ${answer.id}`,
            "provider": answer
        });
    } catch (err) {
        res.status(400).json({ msj: err.message })
    }
}


//OBJETO PARA PROBAR EL DELETE PROVIDER
// {
//     "company_name": "Piscinas S.L"
//   }

const deleteProviders = async (req, res) => {
    const { company_name } = req.body
    console.log(company_name);

    const providerExist = await provider.find({company_name: company_name })
    console.log(providerExist)
    const providerEraser = await provider.findOne({company_name: company_name })
    console.log(providerEraser)
    // (    const provider = await providers.findOne({ company_name })


    // if (Object.keys(provider).length > 0) {)

    if (providerExist[0].company_name === providerEraser.company_name) {
        //EL METODO REMOVE ELIMINA TODOS LOS PRODUCTOS QUE CONTENGAN EL PARAMETRO QUE LE PASAS
        console.log("********",providerExist[0]._id)
        let productsOfCompany = await products.deleteMany({ provider: providerExist[0]._id });
        let response = await provider.deleteOne(providerEraser);
        console.log("Este es el console.log de lo que se va a eliminar de la api", response);
        res.status(204).json({
            msj: `Producto ${company_name} eliminado del sistema.`,
            "product": providerEraser
        });

    } else {
        res.status(400).json({ msj: `Producto ${providerEraser} no encontrado en el sistema.` })
    }

}

//OBJETO PARA PROBAR EL PUT PROVIDERS

// { "company_name": "Compañia Vacia",
// "CIF": "5H5K43",
// "address": "Poligono industfdsfsdrial La virgencita 725",
// "url_web": "https://nohaynada.com" }

const updateProviders = async (req, res) => {

    const { company_name, CIF, address, url_web } = req.body


    try {
        const providerUpdate = await provider.findOneAndUpdate({ company_name: company_name }, { CIF: CIF, address: address, url_web: url_web })
        res.status(201).json({
            msj: `EL provedor ${providerUpdate} ha sido actualizado.`,
        })

    } catch (err) {

        res.status(400).json({ msj: err.message })

    }

}

module.exports = {
    getProviders,
    createProviders,
    deleteProviders,
    updateProviders

}
