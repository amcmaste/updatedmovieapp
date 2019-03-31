$(document).ready(function() {

  $('#login-form-contents').on('submit', function(event) {

    $.ajax({
      data : {
		  
        user : $('#login-username').val(),
		pword : $('#login-password').val()
      
	  },
      type : 'POST',
      url : '/login'
    })
	.done(function(response) {
       
	  $('#login-username').val('');
	  $('#login-password').val('');
	  
	  if (response.login == 'invalid') {
        
		alert('That is not a valid username / password combination. Please try again.');
		
	  } else if (response.login == 'valid') {
        
	    alert("Your credentials have been confirmed, you will now be logged in.");
		
		//Login procedures
		$('#main-background').css('justify content', 'space-between');
		$('#main-column-left').css('padding-right', '40px');
		$('#login-notice').addClass('d-none');
		$('#login-text').removeClass('d-none');
		$('#login-user').removeClass('d-none');
		$('#login-user').html(response.username);
		$('#logout-button').removeClass('d-none');
		$('#login-form').addClass('d-none');
		$('#signup-form').addClass('d-none');
		
	  if ($('#movie-title').text()=='') {
		$('#main-background').addClass('d-none');
	  } else {
		$('#main-background').removeClass('d-none');
	  }
		
		// Check login status
		if ($('#login-user').text()=='' || $('#movie-title').text()=='') {
		  $('.add-question-button').addClass('d-none');
		  $('.add-answer-button').addClass('d-none');
		} else {
		  $('.add-question-button').removeClass('d-none');
		  $('.add-answer-button').removeClass('d-none');
		}
		// End check login status
		
	  }
	
	});

	event.preventDefault();

  });
});