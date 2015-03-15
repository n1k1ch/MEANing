var auth = require('./auth'),
mongoose = require('mongoose'),
User = mongoose.model('User');

module.exports = function(app){

	app.get('/api/users', auth.requiresRole('admin'),function(req, res) {
		User.find({}).exec(function(err, collection) {
			res.send(collection);
		});
	});

	app.get('/partials/*', function(req, res){
		//console.log('getting /partials/' + req.params.partialPath );
		res.render('../../public/app/' + req.params[0]);
	});


	app.post('/login', auth.authenticate);

	app.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});


	//all routes html/css/javascript/...
	app.get('*', function(req, res){
		res.render('index', {
			bootstrappedUser: req.user//sending data to SERVER-SIDE jade template
		});
	});
}