
var myAppModule=angular.module("myApp",[]);
myAppModule.controller('TestCtr',['$scope',function($scope) {
	$scope.user = {name: '小弋', sex: '男', age: 22};
	$scope.date = new Date().toLocaleString();
	setInterval(function () {
		//$scope.date=new Date();
		//$scope.$apply($scope.date=new Date().toLocaleString());
		$scope.$apply(function () {
			$scope.date=new Date().toLocaleString();
		})
	},1000)
	$scope.$watch('date',function(newValue,oldValue){
		console.log(newValue);
		console.log(oldValue);
	},true)
}
	]);

