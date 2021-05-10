const { Model } = require('sequelize')

class Order extends Model {
    static init(connection) {
        super.init({
            
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' })
        this.belongsToMany(models.Product, {
            as: "products",
            through: "orders-products",
            foreignKey: 'order_id',
            otherKey: 'product_id'
        })
    }
}

module.exports = Order