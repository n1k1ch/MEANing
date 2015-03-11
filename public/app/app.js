console.log('hie, me angular app');

angular.module('app', ['ngResource', 'ngRoute']);

//set client-side routes
angular.module('app').config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', { templateUrl: '/partials/main', controller: 'mainCtrl' });

});

//make simple controller
angular.module('app').controller('mainCtrl', function($scope){
	$scope.myVar = "Hello Angulir";
});