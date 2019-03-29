$(document).ready(function() {

  $('#question-form-contents').on('submit', function(event) {
	
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
      
	  $('#add-question-button').removeClass('d-none');
	  $('#add-question-form').addClass('d-none');
	  $('#question').val('');
	
	});
	
    event.preventDefault();
	
  });
  
});