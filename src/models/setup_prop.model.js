
const SetupProp = (sequelize, DataTypes) => {
    const SetupProp = sequelize.define('setup_prop', {
        no_prop: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        nama_prop: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
    });
    return SetupProp;
}

module.exports = SetupProp;