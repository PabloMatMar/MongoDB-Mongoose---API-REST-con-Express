const express = require('express')
const providersControllers = require("../controllers/providersControllers");

const providersRouter = express.Router();

providersRouter.get('/',providersControllers.getProviders);
providersRouter.post('/',providersControllers.createProviders);

module.exports = providersRouter;
