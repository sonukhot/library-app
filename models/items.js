const Items = (connection, Sequelize) => {
    return connection.define('items', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        item: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.ENUM,
        },
        availability: {
            type: Sequelize.ENUM,
        }
    }, {
        paranoid: true
    })
}

module.exports = Items