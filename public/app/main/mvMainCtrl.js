//make simple controller
angular.module('app').controller('mvMainCtrl', function($scope){
	$scope.courses = [
		{name: 'C# for idiots', featured: true, published: new Date('1/1/2012')},
		{name: 'PHP and other suicide alternatives', featured: true, published: new Date('1/1/2012')},
		{name: 'Command line for elephants', featured: false, published: new Date('3/1/2012')},
		{name: 'Running naked in Nike shoes', featured: true, published: new Date('11/1/2005')},
		{name: 'Three-wheeled car, porcelian dog and 55 rubber animals (or how to decorate your workplace)', featured: true, published: new Date('1/1/2012')},
		{name: 'Joga for pencils', featured: true, published: new Date('1/1/2012')},
		{name: 'Mouth-first: Java', featured: true, published: new Date('7/1/1998')},
		{name: 'O-really-?-publishing: 321 as a reverse to 123', featured: true, published: new Date('1/22/2012')},
		{name: 'How to become a volley-ball player', featured: true, published: new Date('1/15/2012')},
		{name: 'Blonde Girl (missing manual)', featured: true, published: new Date('12/1/2012')},
		{name: 'History of Bangladesh', featured: true, published: new Date('9/1/2012')}
	];
});