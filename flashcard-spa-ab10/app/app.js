// this calls have to be first, before other calls come to flashcard modules. It's define the module
// so in index.html this file has to be include first before others
angular.module('flashcard', ['ui.bootstrap', 'ngRoute']);

angular.module('flashcard')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/list', {
				controller: 'QuestionnarieController as ctrl',
				templateUrl: 'Questionnaire/QuestionnaireList.html'
			})
			.when('/create', {
				controller: 'QuestionnarieController as ctrl',
				templateUrl: 'Questionnaire/QuestionnaireCreate.html'
			})
			.otherwise({
				redirectTo: '/list'
			})
	}]);