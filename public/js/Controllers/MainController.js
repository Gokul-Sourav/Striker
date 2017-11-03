app.controller('MainController',['$scope','$http',function($scope,$http){

$scope.title = 'Shopping Cart';
$scope.ppbutton=true;
	$scope.temp=0;
	$scope.pinResult='';
	$scope.products=[];
	$scope.quant=["1","2","3","4"];
	var refresh = function()
	{
	$http.get('/products').success(function(response){
		console.log("I got the data I requested");
		$scope.products=response;
	});
};
refresh();
$scope.addingToCart = function()
{
	if($scope.product.qty>=1)
	{
	$http.post('/products',$scope.product).success(function(response){
		console.log(response);
			});
	}
	else
	alert("Please select the Quantity");
};

$scope.addingToCart1 = function()
{
	if($scope.product1.qty>=1)
	{
	$http.post('/products',$scope.product1).success(function(response){
		console.log(response);
			});
	}
	else
	alert("Please select the Quantity");
};

$scope.addingToCart2 = function()
{
	if($scope.product2.qty>=1)
	{
	$http.post('/products',$scope.product2).success(function(response){
		console.log(response);
			});
	}
	else
	alert("Please select the Quantity");
};

$scope.addingToCart3 = function()
{
	if($scope.product3.qty>=1)
	{
	$http.post('/products',$scope.product3).success(function(response){
		console.log(response);
			});
	}
	else
	alert("Please select the Quantity");
};

$scope.addingToCart4 = function()
{
	if($scope.product4.qty>=1)
	{
	$http.post('/products',$scope.product4).success(function(response){
		console.log(response);
			});
	}
	else
	alert("Please select the Quantity");
};
	/*for(i=0;i<$scope.products.length;i++)
	{
		$scope.products[i].total=$scope.products[i].Price * $scope.products[i].qty;
	}*/
	$scope.pincodes=[637211,637209,637210];
	$scope.buttonEnabling=function(){
			$scope.ppbutton=false;
	};
	/*$scope.empty=function(){

	};*/
	$scope.remove=function(id){
		$http.delete('/products/' +id ).success(function(response){
		 console.log(id);
		 refresh();
	});
	};
	$scope.addOne=function(i){
		//console.log($scope.products[i].qty);
		$scope.products[i].qty=parseInt($scope.products[i].qty) + 1;
		$scope.products[i].total=$scope.products[i].Price * $scope.products[i].qty;
	};
	$scope.minusOne=function(i){
		if(parseInt($scope.products[i].qty) > 1)
		{
		$scope.products[i].qty=parseInt($scope.products[i].qty) - 1;
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
