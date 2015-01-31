angular.module('flashcard')
	.factory('QuestionnaireFactory', function(){
		var questionnaires = [
			           			{id:1, title: 'Q1', description: 'Lorem ipsum...'},
			           			{id:2, title: 'Q2', description: 'Lorem ipsum...'},
			           			{id:3, title: 'Q3', description: 'Lorem ipsum...'}
			           			];
		
		return{
			create: function(title,desc){
				console.log(desc);
				var id = questionnaires.length;
				if(typeof desc == 'undefined'){
					desc = title;
					title = 'Q'+id;
				}
				questionnaires.push( {id:id, title:title, description: desc} );
			},
			
			list: function(){
				return questionnaires;
			},
			
			remove: function(id){
				questionnaires.splice(id,1); // not 100% correct (after modifications may malfunction)
			}
		}
	});
	