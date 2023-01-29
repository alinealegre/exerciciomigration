module.exports = (sequelize, DataType)=>{
    const address = sequelize.define('address', {
        idAddress: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        fk_user: {
            type: Sequelize.INTEGER,
            notNull: true,
        },
  
        rua: {
            type: Sequelize.STRING,
            notNull: true
        },
  
        bairro: {
            type: Sequelize.STRING,
            notNull: true
        },
  
        cidade:{
            type: Sequelize.STRING,
            notNull: true
        },
  
        estado: {
            type: Sequelize.STRING,
            notNull: true
        },
  
        numero: {
          type: Sequelize.INTEGER,
          notNull: true
      },
        complemento: Sequelize.STRING
  
    },{
        tableName:'address',
        timestamps: false
    })    

    address.associate = (models) => {
        Address.belongsTo(models.users, {
            foreignKey: "fk_user",
            as: 'user'
        })
    }

    return Address
}