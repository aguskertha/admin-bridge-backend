
const SetupKel = (sequelize, DataTypes) => {
    const SetupKel = sequelize.define('setup_kel', {
        no_kel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nama_kel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fk_no_prop: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_no_kab: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fk_no_kec: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return SetupKel;
}

module.exports = SetupKel;