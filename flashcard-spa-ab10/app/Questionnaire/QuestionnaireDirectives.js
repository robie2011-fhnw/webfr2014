// also possible to restrict to specific module
// use: app.module(NAME).directive(...)

// use camelCase. in Html File ist called 'camel-case'
angular.module('flashcard').directive('questionnaireElement', function(){
	return {
		restrict: 'A', //optionally (E=Element, A=Attribute, C=Classes, Default=AE)
		templateUrl: 'Questionnaire/QuestionnaireListElement.html'
	};
});