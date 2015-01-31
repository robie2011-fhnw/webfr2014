angular.module('flashcard')
	.controller('QuestionnarieController', ['QuestionnaireFactory', '$modal','$location', function(repo, $modal, $location){		
		this.questionnaires = repo.list();		
		this.save = repo.create;
		this.remove = repo.remove;
		this.saveFromFullscreen = function(title, desc){
			this.save(title,desc);
			$location.path('/')
		};
		
		// modal demo
		this.openModal = function(){
			var modalInstance = $modal.open({
				templateUrl: 'Questionnaire/QuestionnaireCreateModal.html',
				controller: 'ModalInstanceController as ctrl'
				//size: null,
				//resolve: { }
			});
		};
	}])
	.controller('ModalInstanceController', function($scope, $modalInstance, QuestionnaireFactory){
		this.save = function(title,description){
			QuestionnaireFactory.create(title,description);
			//$modalInstance.dismiss('cancel');
			this.close()
		} 
		
		this.close = function(){
			$modalInstance.dismiss('cancel');
		}
		
		this.cancel = this.close;
	})
	.controller('QuestionnaireDetailController', ['$location','QuestionnaireFactory', '$routeParams', function($location, QuestionnaireFactory, $routeParams){
		 var card = QuestionnaireFactory.get($routeParams.id);
		 this.title = card.title;
		 this.description = card.description;
		 
		 this.updateFromFullscreen = function(){
			 QuestionnaireFactory.update($routeParams.id, this.title, this.description);
			 //$location.url('/');
			 this.back();
		 };
	}]);