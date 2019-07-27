$(document).ready(function() {

  $('#signup-form-contents').on('submit', function(event) {

    $.ajax({
      data : {
        username : $('#signup-username').val(),
        email : $('#email').val(),
        pword : $('#signup-password').val()
      },
      type : 'POST',
      url : '/register'
    })
	.done(function(response) {

	  $('#signup-username').val('');
	  $('#email').val('');
	  $('#signup-password').val('');
	  $('#verify').val('');
	  
	  if (response == 'exists') {
        
		alert('Username or email already exists, please choose another.');
		
	  } else {
        
      
	    alert("Your account has been created, you will now be logged in.");
		
		//Login procedures
		$('#main-background').css('justify content', 'space-between');
		$('#main-column-right').css('padding-right', '40px');
		$('#login-notice').addClass('d-none');
		$('#login-text').removeClass('d-none');
		$('#login-user').removeClass('d-none');
		$('#login-user').html(response);
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
		  $('.question-voting').addClass('d-none');
		  $('.answer-voting').addClass('d-none');
		} else {
		  $('.add-question-button').removeClass('d-none');
		  $('.add-answer-button').removeClass('d-none');
		  $('.question-voting').removeClass('d-none');
		  $('.answer-voting').removeClass('d-none');
		}
		// End check login status
		
	  }
	
	});

	event.preventDefault();

  });
});