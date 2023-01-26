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
