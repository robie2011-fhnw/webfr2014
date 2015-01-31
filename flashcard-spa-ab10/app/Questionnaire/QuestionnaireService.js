// Example implementation
angular.module('flashcard')
	.service('QuestionnaireService', function(){
		
		var questionnaires = [
		           			{id:1, title: 'Q1', description: 'Lorem ipsum...'},
		           			{id:2, title: 'Q2', description: 'Lorem ipsum...'},
		           			{id:3, title: 'Q3', description: 'Lorem ipsum...'}
		           			];
		
		this.create = function(str){
			var id = questionnaires.length;
			questionnaires.push( {id:id, title:'Q'+id, description: str} );
		}
		
		this.list = function(){
			return questionnaires;
		}
		
		this.remove = function(id){
			questionnaires.splice(id,1);
		}
	});	