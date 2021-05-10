const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            quantity: DataTypes.STRING,
            color: DataTypes.STRING,
            size: DataTypes.INTEGER,
            price: DataTypes.DOUBLE
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsToMany(models.Order, {
            as: "orders",
            through: "orders-products",
            foreignKey: 'product_id',
            otherKey: 'order_id'
        })
    }
}

module.exports = Product