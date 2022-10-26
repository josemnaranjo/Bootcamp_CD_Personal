const ProductAdm = require('./controllers/productAdm.controller');

module.exports = app => {
    app.post('/api/product', ProductAdm.createProduct);
}

