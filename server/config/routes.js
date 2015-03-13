module.exports = function(app){
	app.get('/partials/*', function(req, res){
		//console.log('getting /partials/' + req.params.partialPath );
		res.render('../../public/app/' + req.params[0]);
	});


	//all routes html/css/javascript/...
	app.get('*', function(req, res){
		res.render('index'/*, {
			mongoMessage: mongoMessage
		}*/);
	});
}