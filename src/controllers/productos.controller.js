const Product = require('../models/Producto');

const productController = {};

productController.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

productController.createProduct = async (req, res) => {
    const { name, brand, price, stock } = req.body;
    const newProduct = new Product({
        name,
        brand,
        price,
        stock
    });
    await newProduct.save();
    res.json({message: 'Producto Guardado'})
}

productController.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product)
}

productController.updateProduct = async (req, res) => {
    const { name, brand, price, stock } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
        name,
        brand,
        price,
        stock
    });
    res.json({message: 'Producto Actualizado'})
}

productController.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({message: 'Producto Eliminado'})
}

module.exports = productController;