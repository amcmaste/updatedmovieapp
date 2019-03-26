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
		
	  } else if (response == 'added') {
        
      
	    alert("Your account has been created, you will now be logged in.");
		
		//Login procedures
		$('#login-text').removeClass('d-none');
		$('#login-user').removeClass('d-none');
		$('#logout-button').removeClass('d-none');
		$('#login-form').addClass('d-none');
		$('#signup-form').addClass('d-none');
		
	  }
	
	});

	event.preventDefault();

  });
});