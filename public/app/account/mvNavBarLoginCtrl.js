angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, mvMyButton, $location){
	$scope.identity = mvIdentity;
	$scope.myButton = mvMyButton;
	$scope.signin = function(username, password) {
		mvAuth.authenticateUser(username, password).then(function(success) {
			if(success) {
				mvNotifier.notify('You have succesfully signed in!')
			} else {
				mvNotifier.notify('Username/password combination incorrect');
			}
		});
	}

	$scope.signout = function() {
		mvAuth.logoutUser().then(function(){
			$scope.username = "";
			$scope.password = "";
			mvNotifier.notify('You have successfuly signed out!');
			$location.path('/');
		});
	}
});