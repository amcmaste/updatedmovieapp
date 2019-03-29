$(document).ready(function() {

  $('#answer-form-contents').on('submit', function(event) {
	
    let user = $('#login-user').text();
	let movie = $('#movie-title').text();
	let question = $(this).parent().parent().siblings('.question-content-container').children('.question-content').text();
	let answer = $('#answer').val();
	
	$.ajax({
      data : {
		  
        user : user,
		movie : movie,
		question : question,
		answer : answer
      
	  },
      type : 'GET',
      url : '/add-answer'
    })
	.done(function(response) {
      
	  $('#add-answer-button').removeClass('d-none');
	  $('#add-answer-form').addClass('d-none');
	  $('#answer').val('');
	
	});
	
    event.preventDefault();
	
  });
  
});