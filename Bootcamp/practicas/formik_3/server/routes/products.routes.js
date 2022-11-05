const ProductSchema = require('../controllers/products.controller');


module.exports = app =>{
    app.post('/api/ferre/crear',ProductSchema.createProduct);
    app.get('/api/ferre/findAll',ProductSchema.findAllProducts);
    app.get('/api/ferre/findOne/:id',ProductSchema.findOneProduct);
    app.put('/api/ferre/editOne/:id',ProductSchema.editOneProduct);
    app.delete('/api/ferre/delete/:id',ProductSchema.deleteOne);
}