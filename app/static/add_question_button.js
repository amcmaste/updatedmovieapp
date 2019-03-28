$(document).ready(function() {

  $('.add-question-button').on('click', function(event) {

    $(this).after($('#add-question-form'));
	$('#add-question-form').removeClass('d-none');
	$(this).addClass('d-none');
	$('.add-answer-button').removeClass('d-none');
	$('#add-answer-form').addClass('d-none');
  
  });
  
});