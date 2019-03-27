$(document).ready(function() {

  $('#answer-submit').on('click', function(event) {
	
    let user = $('#login-user').text();
	let movie = $('#movie-title').text();
	let question = $('.question-content').text();
	let answer = $('#answer').val();
	
	$.ajax({
      data : {
		  
        user : user,
		movie : movie,
		question : question,
		answer : answer
      
	  },
      type : 'GET',
      url : '/add-answer'
    })
	.done(function(response) {
    
      alert(response);
	  $('#answer').val('');
	
	});
	
    event.preventDefault();
	
  });
  
});