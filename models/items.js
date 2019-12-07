const Items = (connection, Sequelize) => {
    return connection.define('items', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },
    }, {
        paranoid: true
    })
}

module.exports = Items