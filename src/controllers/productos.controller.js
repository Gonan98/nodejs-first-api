const Product = require('../models/Producto');

const productController = {};

productController.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

productController.createProduct = async (req, res) => {
    const { name, brand, price, stock } = req.body;
    const newProduct = new Product({
        name: name,
        brand: brand,
        price: price,
        stock: stock
    });
    await newProduct.save();
    res.json({message: 'Producto Guardado'})
}

productController.getProductById = (req, res) => res.json({message: 'Get By Id Resquest'})

productController.updateProduct = (req, res) => res.json({message: 'Producto Actualizado'})

productController.deleteProduct = (req, res) => res.json({message: 'Producto Eliminado'})

module.exports = productController;