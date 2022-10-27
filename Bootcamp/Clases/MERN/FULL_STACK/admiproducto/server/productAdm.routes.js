const ProductAdm = require('./controllers/productAdm.controller');

module.exports = app => {
    app.post('/api/product/create', ProductAdm.createProduct);
    app.get('/api/product/findAll',ProductAdm.getProducts);
    app.get('/api/product/find/:id',ProductAdm.getOneProduct);
}

