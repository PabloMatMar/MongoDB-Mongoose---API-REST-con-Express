const express = require('express')
const productsApiController = require("../controllers/productsController");

const productsRouter = express.Router();


productsRouter.get('/',productsApiController.getProducts);
productsRouter.post('/',productsApiController.createProduct);
productsRouter.delete('/',productsApiController.deleteProduct);
productsRouter.put('/',productsApiController.updateProducts);

module.exports = productsRouter;
