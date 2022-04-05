const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'postgres',
});

const models = {
    User: require('./../models/user.model')(sequelize, Sequelize),
    Userlog: require('./../models/userlog.model')(sequelize, Sequelize),
}

Object.keys(models).forEach((modelName) => {
    if('associate' in models[modelName]){
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;