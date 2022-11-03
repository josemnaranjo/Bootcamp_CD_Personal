const ProductSchema = require('../controllers/products.controller');


module.exports = app =>{
    app.post('/api/ferre/crear',ProductSchema.createProduct);
    app.get('/api/ferre/findAll',ProductSchema.findAllProducts);
}