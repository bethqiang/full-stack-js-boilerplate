// Require our models. Running each module registers the model into Sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');

module.exports = { User };
