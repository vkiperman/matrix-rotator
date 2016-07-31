app.controller('MatrixCtrl', ['$scope', function($scope) {
	$scope.alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$scope.alphaLower = $scope.alphaUpper.toLowerCase();
	$scope.numeric = '1234567890++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++';
	$scope.alphaNumeric = $scope.alphaUpper + $scope.alphaLower + $scope.numeric;
	$scope.across = 8;
	$scope.rotation = 0;

	$scope.matrix = [
		[], [], [], [], [], [], [], [], [], [], [], []
	];
	$scope.origMatrix = [
		[], [], [], [], [], [], [], [], [], [], [], []
	];

	$scope.radomChar = function(){
		var rand = Math.floor(Math.random() * $scope.alphaNumeric.length);
		return $scope.alphaNumeric.charAt(rand);
	};

	// set up original matrix...
	$scope.setupMatrix = function(){

		$scope.matrix = [
			[], [], [], [], [], [], [], [], [], [], [], []
		];
		$scope.origMatrix = [
			[], [], [], [], [], [], [], [], [], [], [], []
		];

		$scope.matrix.forEach(function(e, n){
			var i;
			
			for(i = 0; i < $scope.across; i++){
				e.push( $scope.radomChar() );
				$scope.origMatrix[n].push( $scope.radomChar() );
			}
			//console.log(n, e);
		});
	};

	$scope.clockwise = function(){
		var pivitArray = [
			[], [], [], [], [], [], [], [], [], [], [], []
		];

		$scope.matrix.forEach(function(e, n){
			e.forEach(function(char, idx){
				pivitArray[idx].unshift(char);
			});
		});
		// pivitArray.forEach(function(e, n){
		// 	console.log(n, e);
		// });
		$scope.rotation = (1 + $scope.rotation) % 4;
		$scope.matrix = pivitArray;
		return pivitArray;
	};


	$scope.counterclockwise = function(){
		var pivitArray = [
			[], [], [], [], [], [], [], [], [], [], [], []
		];

		$scope.matrix.forEach(function(e, n){
			e.reverse().forEach(function(char, idx){
				pivitArray[idx].push(char);
			});
			e.reverse();
		});
		// pivitArray.forEach(function(e, n){
		// 	console.log(n, e);
		// });
		$scope.rotation = $scope.rotation === 0 ? 3 : $scope.rotation - 1;
		$scope.matrix = pivitArray;
		return pivitArray;
	};

	$scope.toHex = function (num){
		return '#AF' + ( Math.min(num * 300, 16777215) ).toString( 16 ) + 'F';
	};

	$scope.setColor = function(r, i){
		var o = {color: '#FFF'};

		if(r == 0) {
			o = {color: $scope.toHex(i+1)}
		} else if(r == 1) {
			o = {color: $scope.toHex(i+1)}
		} else if (r == 2){
			o = {color: $scope.toHex($scope.across - i)}
		} else if (r == 3){
			o = {color: $scope.toHex($scope.across - i)}
		}
		console.log(JSON.stringify(o));
		return o;
	};

	$scope.setupMatrix();

}]);