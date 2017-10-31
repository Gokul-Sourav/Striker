app.controller('MainController',['$scope',function($scope){
	
$scope.title = 'Shopping Cart';
$scope.ppbutton=true;
	$scope.temp=0;
	$scope.pinResult='';
$scope.products=[
	{
		Sno : 1,
		Name: 'Lenovo vibe k5 note(3gb,32gb)',
		Price: 11999,
		qty : 1,
		total : 0
	},
	{
		Sno : 2,
		Name: 'Lenovo vibe k5 note(4gb,64gb)',
		Price: 13999.7,
		qty : 1,
		total : 0
	},
	{
		Sno : 3,
		Name: 'Lenovo k6 note(4gb,64gb)',
		Price: 13500,
		qty : 1,
		total : 0
	},
	{
		Sno : 4,
		Name: 'Lenovo k7 note(4gb,64gb)',
		Price: 14500,
		qty : 1,
		total : 0
	}
	];
	for(i=0;i<$scope.products.length;i++)
	{
		$scope.products[i].total=$scope.products[i].Price * $scope.products[i].qty;
	}
	$scope.pincodes=[637211,637209,637210];
	$scope.buttonEnabling=function(){
			$scope.ppbutton=false;
	};
	$scope.empty=function(){
			 $scope.products.splice(0, $scope.products.length);
	};
	$scope.remove=function(i){
		 $scope.products.splice(i,1);
		
		for(j=i;j<$scope.products.length;j++)
		{
			$scope.products[j].Sno=$scope.products[j].Sno-1;
		}
		
	};
	$scope.addOne=function(i){
		$scope.products[i].qty=$scope.products[i].qty + 1;
		$scope.products[i].total=$scope.products[i].Price * $scope.products[i].qty;
	};
	$scope.minusOne=function(i){
		if($scope.products[i].qty > 1)
		{
		$scope.products[i].qty=$scope.products[i].qty - 1;
		$scope.products[i].total=$scope.products[i].Price * $scope.products[i].qty;
		}
	};
	$scope.pinCheck=function()
	{
		$scope.temp=0;
		for(i=0;i<$scope.pincodes.length;i++)
		{
			if($scope.pin==$scope.pincodes[i])
			{ 
				$scope.temp+=1;
			}
		}
		if($scope.temp>=1){
			$scope.date = new Date();
  			$scope.newdate = $scope.date.setDate($scope.date.getDate() + 7); 
			$scope.pinResult='Estimated Delivery By';
			$scope.valid=false;
			$scope.invalid=true;
		}
		else
		{
			$scope.pinResult='!Product Not Available in this pincode';
			$scope.valid=true;
			$scope.invalid=false;
		}
	};
}]);
