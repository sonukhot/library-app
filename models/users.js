const Users = (connection, Sequelize) => {
    return connection.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.ENUM,
        }
    },
        {
            paranoid: true
        })
}
module.exports = Users