const ProductController = require('./controllers/products.controller');
const ReviewController = require('./controllers/reviews.controller');

module.exports =  app => {

    //PRODUCTS
    app.get('/api/products',ProductController.findAll);
    app.post('/api/products/new', ProductController.create);
    app.get('/api/products/:id',ProductController.findOne);
    app.put('/api/products/update/:id',ProductController.update);
    app.delete('/api/products/delete/:id',ProductController.delete);

    //REVIEWS
    app.post('/api/reviews/new',ReviewController.createReview);
    app.get('/api/reviews/:id',ReviewController.getReviewsFromProduct);

}

