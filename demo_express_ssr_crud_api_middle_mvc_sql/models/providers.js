const mongoose = require('mongoose');
// require('../utils/db_mongo')//conectarse a la BBDD
// company_name
// CIF
// address
// url_web


const objectSchema = {
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
const providersSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Providers = mongoose.model('Providers', providersSchema);

module.exports = Providers;






// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("EmpresasPoligonoLaSerna");
//   var myobj = [
//     { company_name: 'Equipamiento Deportivo S.L',CIF:'T4543KKKDDD', address: 'Poligono industrial La virgencita 71', url_web: "https://EquipamientoDeportivSL.com" },
//     { company_name: 'Juguegos de mesa S. L',CIF:'4JK5J4KH67374', address: 'Poligono industrial La virgencita 69', url_web: "https://JuguegosDeMesaSL.com" },
//     { company_name: 'Ropa de caballero S. L',CIF:'KJ543KJ5634', address: 'Poligono industrial La virgencita 42', url_web: "https://RopaDeCaballeroSL.com" },
//     { company_name: 'Armas de fuego para inseguros S.A',CIF:'KH4534KJH6K34', address: 'Poligono industrial La virgencita 33', url_web: "https://Armasdefuegoparainseguros.com" },
//     { company_name: 'Comida para bodas S. L',CIF:'NKN34N53K4', address: 'Poligono industrial La virgencita 21', url_web: "https://ComidaparabodasSL.com" },
//     { company_name: 'Todo para tu mascota S.A',CIF:'LM2M4LKM3L6M7LK', address: 'Poligono industrial La virgencita 7120', url_web: "https://TodoparatumascotaSA.com" },
//     { company_name: 'Reformas sin extres SL',CIF:'NK5233NK6N347', address: 'Poligono industrial La virgencita 11', url_web: "https://ReformassinextresSL.com" },
//     { company_name: 'Jugetes Eroticos S.L',CIF:'NK5L4N3KKN5L7', address: 'Poligono industrial La virgencita 38', url_web: "https://JugetesEroticosSL.com" },
//     { company_name: 'Piscinas y estanques.SL',CIF:'N543K335N4K', address: 'Poligono industrial La virgencita 95', url_web: "https://Piscinasyestanques.SL.com" }
//   ];
//   dbo.collection("providers").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });


// const mongoose = require('mongoose');
// require('../utils/db_mongo')//conectarse a la BBDD

// const objectSchema = {
//     id: { 
//         type: Number, 
//         required: true,
//         unique: true
//     },
//     CIF: { 
//         type: String, 
//         required: true,
//         unique: true
//     },
//     addres: { 
//         type: Number, 
//         required: true
//     },
//     description: { 
//         type: String, 
//         required: true 
//     },
//     url_web:{
//         type: String,
//         validate: {
//             validator: function(url){
//                 if(url.indexOf('.com') != -1 || url.indexOf('.es') != -1)
//                     return true;
//                 else {
//                     return false;
//                 }
//             }, 
//             message: "Porfa, solo urls con dominio .com o .es"
//         }
//     }
// };
// // Crear el esquema
// const productSchema = mongoose.Schema(objectSchema);
// // Crear el modelo --> Colección
// const Providers = mongoose.model('Providers', productSchema);

// module.exports = Providers;