// use camelCase. in Html File ist called 'camel-case'
angular.module('flashcard').directive('questionnaireElement', function(){
	return {
		restrict: 'A', //optionally (E=Element, A=Attribute, C=Classes, Default=AE)
		replace: true, // optionally
		//variableName: '=' // Variables from other Variables From scope (not testet)
		templateUrl: 'Questionnaire/QuestionnaireListElement.html'
	};
});

angular.module('flashcard').directive('questionnaireElementAdvanced', function(){
	return {
		replace: true, // optionally
		templateUrl: 'Questionnaire/QuestionnaireListElement.html',
		link: function(scope, elem, attrs){
			elem.bind('click', function(){
				if(elem.hasClass('alert alert-warning')){
					elem.removeClass('alert alert-warning');
				}else{					
					elem.addClass('alert alert-warning');
				}
			});
			
			elem.bind('mouseover', function(){
				elem.css('cursor', 'pointer');
				elem.css('background-color', 'yellow');
			});
			
			elem.bind('mouseout', function(){
				elem.css('background-color', 'transparent');
			});

		}
	};
});