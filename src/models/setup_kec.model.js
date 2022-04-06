
const SetupKec = (sequelize, DataTypes) => {
    const SetupKec = sequelize.define('setup_kec', {
        no_kec: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nama_kec: {
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
    });
    return SetupKec;
}

module.exports = SetupKec;