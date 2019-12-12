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
            type: Sequelize.ENUM('fun', 'Tech', 'Tools', 'Home'),
        },
        availability: {
            type: Sequelize.ENUM('in', 'out'),
        }
    }, {
        paranoid: true
    })
}

module.exports = Items