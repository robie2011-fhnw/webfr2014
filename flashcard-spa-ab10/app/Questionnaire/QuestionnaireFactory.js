angular.module('flashcard')
	.factory('QuestionnaireFactory', function(){
		var questionnaires = [
			           			{id:1, title: 'Q1', description: 'Lorem ipsum...'},
			           			{id:2, title: 'Q2', description: 'Lorem ipsum...'},
			           			{id:3, title: 'Q3', description: 'Lorem ipsum...'}
			           			];
		
		return{
			create: function(str){
				var id = questionnaires.length;
				questionnaires.push( {id:id, title:'Q'+id, description: str} );
			},
			
			list: function(){
				return questionnaires;
			},
			
			remove: function(id){
				questionnaires.splice(id,1);
			}
		}
	});
	