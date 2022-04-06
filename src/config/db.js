const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'postgres',
});

const models = {
    User: require('./../models/user.model')(sequelize, Sequelize),
    Userlog: require('./../models/userlog.model')(sequelize, Sequelize),
    SetupProp: require('./../models/setup_prop.model')(sequelize, Sequelize),
    SetupKab: require('./../models/setup_kab.model')(sequelize, Sequelize),
    SetupKec: require('./../models/setup_kec.model')(sequelize, Sequelize),
    SetupKel: require('./../models/setup_kel.model')(sequelize, Sequelize),
    BiodataWNI: require('./../models/biodata_wni.model')(sequelize, Sequelize),
    DataKeluarga: require('./../models/data_keluarga.model')(sequelize, Sequelize),
}

Object.keys(models).forEach((modelName) => {
    if('associate' in models[modelName]){
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;