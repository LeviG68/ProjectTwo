var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    var Tenant = sequelize.define("Tenant", {
  
      // User's first name. String, can't be null  
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      // User's last name. String, can't be null  
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      // User's phone number. Integer, 10 numbers, can be null
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          len: [10]
        }
      },
  
      // User's email address. String, can't be null
      registeredEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
  
      // User's password. String, can be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
      // Address: state. String, must be alphabetic, 2 characters, can't be null
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          len: [2]
        }
      },
  
      // Address: zip code. Integer, must be numeric, 5 characters, can be null
      zipCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isNumeric: true,
          isInt: true,
          len: [5]
        }
      },
  
      // Address: city. String, must be alphabetic, can't be null
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
        }
      },
  
      // Address: property. String, can't be null
      // property: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
  
      // Address: unit. String, can be null
      unit: {
        type: DataTypes.STRING,
        allowNull: true
      },
  
      // User's type: tenant or admin. Boolean, can be null
      isTenant: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
  
      // Time stamp: disable
    });

    Tenant.associate = function(models) {
      Tenant.hasMany(models.Ticket);
    }
    
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Tenant.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Tenant Model lifecycle
  // In this case, before a Tenant is created, we will automatically hash their password
  Tenant.hook("beforeCreate", function(tenant) {
    tenant.password = bcrypt.hashSync(tenant.password, bcrypt.genSaltSync(10), null);
  });
    return Tenant;
  }