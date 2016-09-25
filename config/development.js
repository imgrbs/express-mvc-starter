"use strict"

module.exports = {
	// development environment configuration
	database: require('../knexfile').development,
	jwt: {
		algorithm: "RS256",
		expiresIn: "60000", 		// expire after 1 minute
		
	}
}