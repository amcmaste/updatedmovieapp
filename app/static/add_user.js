$(document).ready(function() {

  $('#signup-form-contents').on('submit', function(event) {

    $.ajax({
      data : {
        username : $('#signup-username').val(),
        email : $('#email').val(),
        pword : $('#signup-password').val()
      },
      type : 'POST',
      url : '/add-user'
    })
	.done(function(response) {

	  $('#signup-username').val('');
	  $('#email').val('');
	  $('#signup-password').val('');
	  $('#verify').val('');
	  
	  if (response == 'exists') {
        
		alert('Username or email already exists, please choose another.');
		
	  } else if (response == 'added') {
        
      $('#signup-submit').prop("disabled", true);
	  alert("Your account has been created, please login.");
		
	  }
	
	});

	event.preventDefault();

  });
});