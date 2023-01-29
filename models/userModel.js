module.exports = (sequelize, DataType)=>{
    const User = sequelize.define('user',{
        idClient: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nome: {
            type: DataType.STRING,
            notNull: true
        },
        email: {
            type: DataType.STRING,
            notNull: true
        },
        senha:{
            type: DataType.STRING,
            notNull: true
        }
    },{
        tableName:'user',
        timestamps: false
    })

    User.associate = (models) => {
        User.hasMany(models.address,{
            foreignKey: 'fk_user',
            as: 'address'
        })
    }

    return User

}