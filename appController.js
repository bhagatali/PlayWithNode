function SimpleController ($scope) {
	$scope.sum = 1000 + 5;

	$scope.sayHello = function() {
		alert("Hello " + $scope.username);
	}
}