const express = require('express')
const providersControllers = require("../controllers/providersControllers");

const providersRouter = express.Router();

providersRouter.get('/',providersControllers.getProviders);
providersRouter.post('/',providersControllers.createProviders);
providersRouter.delete('/',providersControllers.deleteProviders);

module.exports = providersRouter;
