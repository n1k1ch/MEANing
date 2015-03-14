angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, mvMyButton){
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
});