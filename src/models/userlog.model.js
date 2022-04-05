
const Userlog = (sequelize, DataTypes) => {
    const Userlog = sequelize.define('userlog', {
        action: {
            type: DataTypes.STRING,
        },
    });

    Userlog.associate = (models) => {
        Userlog.belongsTo(models.User, {
            foreignKey: 'userID'
        });
    }
    return Userlog;
} 

module.exports = Userlog;