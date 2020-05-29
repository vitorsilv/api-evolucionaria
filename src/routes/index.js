const routes = require('express').Router();

routes.get('/', (req, res) => res.json({path: "Você está nas rotas"}));

//routes.use('/seller', require('./SellerRoute'));
//routes.use('/database', require('./DataBaseRoute'));

module.exports = routes;