const Order = require('../models/Order')
const User = require('../models/User')
const Product = require('../models/Product')

module.exports = {
    async index(req, res) {
        const { user_id, order_id } = req.params

        if (order_id) {
            const user = await User.findByPk(user_id)

            if (!user) return res.status(400).json({ error: 'User not found.' })

            const order = await Order.findOne({
                where: {
                    id: order_id,
                    user_id
                },
                include: {
                    association: 'products',
                    through: { attributes: [] }
                }
            })

            if (!order) return res.status(400).json({ error: 'Order not found.' })

            return res.json(order)
        }

        const user = await User.findByPk(user_id, {
            include: {
                association: 'orders'
            }
        })

        if (!user) return res.status(400).json({ error: 'User not found.' })

        return res.send({ user })
    },

    async store(req, res) {
        const { user_id } = req.params
        const { products } = req.body

        const user = User.findByPk(user_id)
        if (!user) return res.status(400).json({ error: 'User not found.' })

        const orderProducts = []

        for (let i = 0; i < products.length; i++) {
            orderProducts[i] = await Product.findByPk(products[i].id);
            if (!orderProducts[i]) return res.send({ error: 'Invalid product' })
        }

        const order = await Order.create({ user_id })
        order.addProducts(orderProducts)

        return res.json({ order, orderProducts })
    },
}