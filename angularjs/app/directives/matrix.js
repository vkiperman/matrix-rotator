app.directive('matrixRotator', ['$window', function($window){
	return {
		'restrict': 'E',
		templateUrl: '/templates/matrix.html',
		'link': function(scope, elem, attrs) {

			scope.$watch('across', function(n, o){
				scope.setupMatrix();
				
				
			});

			// angular.element($window).bind('resize', function(){
			// 	scope.$apply(function(){
			// 	});
			// 	scope.$digest();
			// });
			
		}
	};
}])

.directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseFloat(value);
      });
    }
  };
})

.directive('shrinkWrap', function(){
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			function shrinkWrap (event){
		        var tmp = document.createElement(attrs.elem),
		        	theWidth;

		        tmp.style.visibility = 'hidden';
		        tmp.style.whiteSpace = 'pre';
		        tmp.style.display = 'inline';
		        tmp.innerHTML = this.value;

		        document.body.appendChild(tmp);
		        theWidth = tmp.getBoundingClientRect().width;
		        document.body.removeChild(tmp);

		        this.style.width = theWidth + 'px';

			}
			angular.element(element).bind('keyup', shrinkWrap);
			shrinkWrap.apply(element[0], arguments);
		}
	};
});