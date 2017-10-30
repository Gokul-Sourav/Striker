

app.controller('MainController',['$scope',function($scope){
	
$scope.title = 'Shopping Cart';
$scope.products=[
	{
		Sno : 1,
		Name: 'Lenovo vibe k5 note(3gb,32gb)',
		Price: 11999,
		qty : 1
	},
	{
		Sno : 2,
		Name: 'Lenovo vibe k5 note(4gb,64gb)',
		Price: 13999.7,
		qty : 2
	},
	{
		Sno : 3,
		Name: 'Lenovo k6 note(4gb,64gb)',
		Price: 13500,
		qty : 5
	},
	{
		Sno : 4,
		Name: 'Lenovo k7 note(4gb,64gb)',
		Price: 14500,
		qty : 5
	}
	];
}]);
