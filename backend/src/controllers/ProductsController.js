const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const { product_id } = req.params

        if (product_id) {
            const product = await Product.findByPk(product_id)
            return res.json(product)
        }
        
        const products = await Product.findAll()
        return res.json(products)
    },

    async store(req, res) {
        const { name, quantity, color, size, price } = req.body;

        const product = await Product.create({ name, quantity, color, size, price })

        return res.json(product)
    }
}