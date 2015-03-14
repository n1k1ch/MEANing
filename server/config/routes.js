var auth = require('./auth');

module.exports = function(app){
	app.get('/partials/*', function(req, res){
		//console.log('getting /partials/' + req.params.partialPath );
		res.render('../../public/app/' + req.params[0]);
	});


	app.post('/login', auth.authenticate);


	//all routes html/css/javascript/...
	app.get('*', function(req, res){
		res.render('index'/*, {
			mongoMessage: mongoMessage//sending data to SERVER-SIDE jade template
		}*/);
	});
}