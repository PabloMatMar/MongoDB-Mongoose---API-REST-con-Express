const mongoose = require('mongoose');
// require('../utils/db_mongo')//conectarse a la BBDD
// company_name
// CIF
// address
// url_web


const objectProviders = {
    company_name: {
        type: String,
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true
    },
    address: { 
        type: String, 
        required: true
    },
    url_web: { 
        type: String, 
        required: true 
    }
};
// Crear el esquema
const providersSchema = mongoose.Schema(objectProviders);
// Crear el modelo --> Colección
const provider = mongoose.model('Providers', providersSchema);

module.exports = provider;
