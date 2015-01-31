// this calls have to be first, before other calls come to flashcard modules. It's define the module
// so in index.html this file has to be include first before others
angular.module('flashcard', []);

angular.module('flashcard')
	.controller('QuestionnarieController', ['QuestionnaireFactory', function(repo){		
		this.questionnaires = repo.list();		
		this.save = repo.create;
	}]);