
const SetupKab = (sequelize, DataTypes) => {
    const SetupKab = sequelize.define('setup_kab', {
        no_kab: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nama_kab: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fk_no_prop: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return SetupKab;
}

module.exports = SetupKab;