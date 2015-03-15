var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
	firstName: {type:String, required: '{PATH} is required!'},
	 lastName: {type:String, required: '{PATH} is required!'},
	 username: {
		 type: String,
		 required: '{PATH} is required!',
		 unique: true//with this line, mongoose 3.9.x falls with "cannot read property 'length' of undefined at processResults". Switched to mongoose 3.8.25
	 },
	 salt: {type:String, required: '{PATH} is required!'},
	 hashed_pwd: {type:String, required: '{PATH} is required!'},
	 roles: [String]
});

userSchema.methods = {
	authenticate: function(passwordToMatch) {
		return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
	}
};

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
	User.find({}).exec(function(err, collection){
		if(collection.length === 0) {
			createSaltedUser('Nikita', 'Cherevkov', 'n1k1ch', User, ['admin']);
			createSaltedUser('Alexandr', 'Lavrov', 'hahol1989', User, []);
			createSaltedUser('Sergey', 'Trindiuk', 'serega_batya1987', User, []);
		}
	});
};

function createSaltedUser(firstName, lastName, username, User, roles) {
	var salt = encrypt.createSalt();
	User.create({firstName:firstName,
		lastName: lastName,
		username: username,
		salt: salt,
		hashed_pwd: encrypt.hashPwd(salt, username),
		roles: roles
	});
};

exports.createDefaultUsers = createDefaultUsers;