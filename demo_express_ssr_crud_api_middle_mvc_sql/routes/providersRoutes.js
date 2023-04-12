const express = require('express')
const providersControllers = require("../controllers/providersControllers");

const providersRouter = express.Router();

providersRouter.get('/',providersControllers.getProviders);
providersRouter.post('/',providersControllers.createProviders);
providersRouter.delete('/',providersControllers.deleteProviders);
providersRouter.put('/',providersControllers.updateProviders);

module.exports = providersRouter;
