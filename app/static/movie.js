$(document).ready(function() {

  $('#change-movie-form-contents').on('submit', function(event) {

    $.ajax({
      data : {
		  
        t : $('#title').val()
      
	  },
      type : 'GET',
      url : 'https://www.omdbapi.com/?apikey=227f7057&'
    })
	.done(function(response) {
       
        // Clear form fields
		$('#title').val('');
		
		// Set movie variables
		$('#movie-title').html(response.Title);
		$('#movie-image').attr('src', response.Poster);
		
		// Return
		return response;
	
	})
	.done(function(response) {
	
	  $.ajax({
        data : {
		  
          imdb : response.imdbID,
		  title : response.Title
      
	    },
        type : 'GET',
        url : '/movie'
      })
	  .done(function(response) {
	    
		alert(JSON.stringify(response));
	  
	  })
	
	})

	event.preventDefault();

  });
});