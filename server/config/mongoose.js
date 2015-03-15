var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');

module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback(){
		console.log('multivision db opened');
	});


	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		username: String,
		salt: String,
		hashed_pwd: String,
		roles: [String]
	});

	userSchema.methods = {
		authenticate: function(passwordToMatch) {
			return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
		}
	}

	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection){
		if(collection.length === 0) {
			createSaltedUser('Nikita', 'Cherevkov', 'n1k1ch', User, ['admin']);
			createSaltedUser('Alexandr', 'Lavrov', 'hahol1989', User, []);
			createSaltedUser('Sergey', 'Trindiuk', 'serega_batya1987', User, []);
		}
	});
}

function createSaltedUser(firstName, lastName, username, User, roles) {
	var salt = encrypt.createSalt();
	User.create({firstName:firstName, 
		lastName: lastName, 
		username: username, 
		salt: salt,
		hashed_pwd: encrypt.hashPwd(salt, username),
		roles: roles
	});
}