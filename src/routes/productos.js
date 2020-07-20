const { Router } = require('express');
const router = Router();

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productos.controller');

router.route('/')
    .get(getProducts)
    .post(createProduct)

router.route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router;