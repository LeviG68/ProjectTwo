var Sequelize = require("sequelize");

var connection = new Sequelize('database', 'user', 'password');

module.exports = function (sequelize, DataTypes) {
  var Tenant = sequelize.define("Post", {

    // User's first name. String, can't be null  
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },

    // User's last name. String, can't be null  
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },

    // User's phone number. Integer, 10 numbers, can be null
    phoneNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        len: [10]
      }
    },

    // User's email address. String, can't be null
    registeredEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    // User's password. String, can be null
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    // Address: state. String, must be alphabetic, 2 characters, can't be null
    state: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [2]
      }
    },

    // Address: zip code. Integer, must be numeric, 5 characters, can be null
    zipCode: {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: true,
        isInt: true,
        len: [5]
      }
    },

    // Address: city. String, must be alphabetic, can't be null
    city: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },

    // Address: property. String, can't be null
    property: {
      type: Sequelize.STRING,
      allowNull: false
    },

    // Address: unit. String, can be null
    unit: {
      type: Sequelize.STRING,
      allowNull: true
    },

    // User's type: tenant or admin. Boolean, can be null
    isTenant: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    }

    // Time stamp: disable
  });

  // Create Ticket table
  var Ticket = connection.define('tenant', {

    // Tenant's ID. Integer, can't be null
    tenantId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    // Issue reported. String, can't be null
    issue: {
      type: Sequelize.STRING,
      allowNull: false
    },

    // Comments. Text, can be null
    comments: {
      type: Sequelize.TEXT,
      allowNull: true
    },

    // Ticket's status. String, can't be null
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Open'
    }
  });

  Post.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};







// connection.sync().then(function () {
//   // Update tables
//   Tenant.create({
//     firstName: __POST.firstName,
//     lastName: ,
//     phoneNumber: ,
//     email: ,
//     password: ,
//     state: ,
//     zipCode: ,
//     city: ,
//     property: ,
//     unit: ,
//     isTenant: 
//     });

//   Ticket.create({
//     tenantID: ,
//     issue: ,
//     comments: ,
//     status:  
//     });

// });
