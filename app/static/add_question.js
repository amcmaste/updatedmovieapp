$(document).ready(function() {

  $('#question-submit').on('click', function(event) {
	
    let user = $('#login-user').text();
	let movie = $('#movie-title').text();
	let question = $('#question').val();
	
	$.ajax({
      data : {
		  
        user : user,
		movie : movie,
		question : question
      
	  },
      type : 'GET',
      url : '/add-question'
    })
	.done(function(response) {
    
      alert(response);
	  $('#question').val('');
	
	});
	
    event.preventDefault();
	
  });
  
});