const express = require('express')
const productsApiController = require("../controllers/productsApiController");

const productsRouter = express.Router();

productsRouter.get('/',productsApiController.getProducts);
productsRouter.post('/',productsApiController.createProduct);

module.exports = productsRouter;
