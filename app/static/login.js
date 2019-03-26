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
		$('#login-text').removeClass('d-none');
		$('#login-user').removeClass('d-none');
		$('#login-user').html(response.username);
		$('#logout-button').removeClass('d-none');
		$('#login-form').addClass('d-none');
		$('#signup-form').addClass('d-none');
		
	  }
	
	});

	event.preventDefault();

  });
});