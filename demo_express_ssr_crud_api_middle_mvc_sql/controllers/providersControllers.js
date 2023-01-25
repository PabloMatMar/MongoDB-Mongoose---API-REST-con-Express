// Controlador - Lógica de negocio de la app
const Providers = require('../models/providers');
const mongoose = require('mongoose');

// "_id": "63d1948f5d00d5c0e6d00d07",
// "company_name": "Equipamiento Deportivo S.L",
// "CIF": "T4543KKKDDD",
// "address": "Poligono industrial La virgencita 71",
// "url_web": "https://EquipamientoDeportivSL.com",
// "__v": 0


const getProviders = async (req, res) => {
    try {
        let providers = await Providers.find({Providers},{_id:0,__v:0}); // []
        res.status(200).json(providers); // Respuesta de la API para muchos productos
    }
    catch (err) {
        console.log("*******err******")
        console.log(err)
        res.status(400).json({ msj: err.message });
    }
}


const createProviders = async (req, res) => {
    console.log("Este es el objeto con las propiedades del provedor introducido:", req.body); // Objeto recibido de producto nuevo
    const newProviders = req.body; // {} nuevo producto a guardar

    // Líneas
    // para guardar 
    // en una BBDD SQL o MongoDB
    //para guardar en una bbdd mongoDB
    try {
        let response = await new Providers(newProviders);
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

const deleteProviders = async (req, res) => {
    const msj = "Has enviado un DELETE para borrar providers";
    console.log(msj);
    res.json({ "message": msj });
}
module.exports = {
    getProviders,
    createProviders,
    deleteProviders,
    //editProduct,

}