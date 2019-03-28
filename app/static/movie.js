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
		  
		let quest = $('.questions-container');
		
		quest.html('');
	    
		for (let question in response) {
		  quest.append(
		  `
            <div class="question-specific-container">
              <div class="question-content-container">
                <div class="question-points">POINTS</div>
				<div class="question-voting">
				  <i class="fas fa-arrow-alt-circle-up"></i>
			      <i class="fas fa-arrow-alt-circle-down"></i>
				</div>
				<div class="question-content">CONTENT</div>
              </div>
              <div class="answers-container">
              </div>
              <div class="more-answers-container">
                <button class="more-answers-button btn btn-primary more-button">More Answers</button>
              </div>
              <div class="add-answer-container">
                {{  wtf.quick_form(answer, id="add-answer-form-contents")  }}
              </div>
            </div>
		  `
		  );
		  
		  let ans = $('.answers-container');
		  
		  for (let answer in question.answers) {
			ans.append(
            `
              <div class="answer-specific-container">
                <div class="answer-content-container">
                  <div class="answer-points">POINTS</div>
				  <div class="answer-voting">
				    <i class="fas fa-arrow-alt-circle-up"></i>
					<i class="fas fa-arrow-alt-circle-down"></i>
			      </div>
				  <div class="answer-content">CONTENT</div>
                </div>
              </div>
			`
			);			
		  }
		  
		}
	  
	  })
	
	})

	event.preventDefault();

  });
});