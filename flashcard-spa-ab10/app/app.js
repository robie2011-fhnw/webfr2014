angular.module('flashcard',[])
	.controller('QuestionnarieController', function(){
		this.questionnaires = [
			{id:1, title: 'Q1', description: 'Lorem ipsum...'},
			{id:2, title: 'Q2', description: 'Lorem ipsum...'},
			{id:3, title: 'Q3', description: 'Lorem ipsum...'}
			];
		
		this.save = function(str){
			var id = this.questionnaires.length;
			this.questionnaires.push( {id:id, title:'Q'+id, description: str} );
		};
	});