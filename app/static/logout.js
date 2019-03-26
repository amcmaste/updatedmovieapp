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
        $('#login-text').addClass('d-none');
		$('#login-user').addClass('d-none');
		$('#login-user').html('');
		$('#logout-button').addClass('d-none');
		$('#login-form').removeClass('d-none');
		$('#signup-form').removeClass('d-none');
	
	});

	event.preventDefault();

  });
});