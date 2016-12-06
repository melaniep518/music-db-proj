const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

const Genre = sequelizeConnection.define('genre', {
	title: {
		type: Sequelize.STRING,
		validate: {
			len: [1, 100]
		}
	}
})

module.exports = Genre;
