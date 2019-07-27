$(document).ready(function() {

  $('#change-movie-form-contents').on('submit', function(event) {
 
    // Start first AJAX request
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
	  $('#main-background').removeClass('d-none');
	  $('#movie-background').css('justify-content', 'space-between');
	  $('#main-background').css('justify-content', 'space-between');
	  $('#main-column left').css('margin-right', '40px');
	  $('#movie-notice').addClass('d-none');
	  $('#login-notice').addClass('d-none');
      $('#movie-title').html(response.Title);
	  $('#movie-image').removeClass('d-none');
      $('#movie-image').attr('src', response.Poster);
	  
	  // Send "ADD" forms back to hidden div
	  $('#placeholder').after($('#add-question-form'));
	  $('#placeholder').after($('#add-answer-form'));
	  $('#add-question-form').addClass('d-none');
	  $('#add-answer-form').addClass('d-none');
	  
      // Start second AJAX request
	  $.ajax({
        data : {

          imdb : response.imdbID,
		  title : response.Title

        },
        type : 'GET',
        url : '/movie'
      })
	  .done(function(response) {

        // Populate questions and answers
	    let quest = $('.questions-container');
		quest.html('');
		
		//Start pasted content (A)
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
              <div class="answers-container-${i}">
              </div>
              <div class="more-answers-container">
                <button class="more-answers-button btn btn-primary more-button d-none">More Answers</button>
              </div>
              <div class="add-answer-container">
                <button class="add-answer-button btn btn-primary more-button d-none">Add Answer</button>
              </div>
            </div>
		  `
		  );
		  
		  let ans = $('.answers-container-'+i);
		  
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
		// End pasted content (A)
		
		// Start pasted content (B)
		$('.add-answer-button').on('click', function(event) {

          $(this).after($('#add-answer-form'));
	      $('#add-answer-form').removeClass('d-none');
	      $(this).addClass('d-none');
		  $('.add-answer-button').not($(this)).removeClass('d-none');
		  $('.add-question-button').removeClass('d-none');
		  $('#add-question-form').addClass('d-none');
  
        });
		// End pasted content (B)
		
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
	  
	  })
	
	})
  
  event.preventDefault();
    
  });

});