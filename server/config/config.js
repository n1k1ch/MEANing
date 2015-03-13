var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

//TODO: remove
var procEnvPort = "process.env.PORT: " + process.env.PORT;
console.log(procEnvPort);

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://n1k1ch:multivision@ds045511.mongolab.com:45511/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}