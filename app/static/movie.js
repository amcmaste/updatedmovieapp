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
		
		$('#placeholder').after($('#add-question-form'));
		$('#placeholder').after($('#add-answer-form'));
		
		quest.html('');
	    
		for (let i=0; i < response.length; i++) {
		  
		  let question = response[i];
			
		  quest.append(
		  `
            <div class="question-specific-container">
              <div class="question-content-container">
                <div class="question-points">${question.points}pts</div>
				<div class="question-voting">
				  <i class="fas fa-arrow-alt-circle-up up-arrow"></i>
			      <i class="fas fa-arrow-alt-circle-down"></i>
				</div>
				<div class="question-content">${question.content}</div>
              </div>
              <div class="answers-container">
              </div>
              <div class="more-answers-container">
                <button class="more-answers-button btn btn-primary more-button">More Answers</button>
              </div>
              <div class="add-answer-container">
                <button class="add-answer-button btn btn-primary more-button">Add Answer</button>
              </div>
            </div>
		  `
		  );
		  
		  let ans = $('.answers-container');
		  
		  for (let j=0; j < question.answers.length; j++) {
			
			let answer = question.answers[j];
			  
			ans.append(
            `
              <div class="answer-specific-container">
                <div class="answer-content-container">
                  <div class="answer-points">${answer.points}pts</div>
				  <div class="answer-voting">
				    <i class="fas fa-arrow-alt-circle-up up-arrow"></i>
					<i class="fas fa-arrow-alt-circle-down"></i>
			      </div>
				  <div class="answer-content">${answer.content}</div>
                </div>
              </div>
			`
			);			
		  }

		}
		
		$('.add-answer-button').on('click', function(event) {

          $(this).after($('#add-answer-form'));
	      $('#add-answer-form').removeClass('d-none');
	      $(this).addClass('d-none');
		  $('.add-answer-button').not($(this)).removeClass('d-none');
		  $('.add-question-button').removeClass('d-none');
		  $('#add-question-form').addClass('d-none');
  
        });
	  
	  })
	
	})

	event.preventDefault();

  });
  
});