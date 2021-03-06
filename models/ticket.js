

module.exports = function (sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
  
      // Tenant's ID. Integer, can't be null
      // tenantId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
  
      // Issue reported. String, can't be null
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      // Comments. Text, can be null
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      },
  
      // Ticket's status. String, can't be null
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Open'
      }
    });

    Ticket.associate = function(models) {
      Ticket.belongsTo(models.Tenant);
    }
  
    return Ticket;
  }