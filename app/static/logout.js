$(document).ready(function() {

  $('#logout-button').on('click', function(event) {
	  
	let user = $('#login-user').val();

    $.ajax({
      data : {
		  
        user : user
      
	  },
      type : 'POST',
      url : '/logout'
    })
	.done(function(response) {
	
	    alert("You will now be logged out.");
	
	    // Logout user
		$('#main-background').removeClass('d-none');
        $('#login-text').addClass('d-none');
		$('#login-user').addClass('d-none');
		$('#login-user').html('');
		$('#logout-button').addClass('d-none');
		$('#login-form').removeClass('d-none');
		$('#signup-form').removeClass('d-none');
		
		// Check login status
		if ($('#login-user').text()=='' || $('#movie-title').text()=='') {
		  $('.add-question-button').addClass('d-none');
		  $('.add-answer-button').addClass('d-none');
		  $('.question-voting').addClass('d-none');
		  $('.answer-voting').addClass('d-none');
		} else {
		  $('.add-question-button').removeClass('d-none');
		  $('.add-answer-button').removeClass('d-none');
		  $('.question-voting').removeClass('d-none');
		  $('.answer-voting').removeClass('d-none');
		}
		// End check login status
	
	});

	event.preventDefault();

  });
});