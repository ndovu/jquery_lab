$(document).on('ready', function() {
  $('.shape').on('click', function() {
    console.log('shape clicked');
  });
  $('.blue.circle').on('mouseenter', function() {
    console.log('Blue Circle: Get outta mah house!');
  });
  $('.blue.circle').on('mouseleave', function() {
    console.log('Blue Circle: Kay, pce brah!');
  });
  $('tr').on('mouseenter', function() {
    $(this).attr('class', 'highlight');
  });
  $('tr').on('mouseleave', function() {
    $(this).attr('class', '');
  });
  $('#button-1').on('click', function() {
    $('.shape').remove();
  });
  $('#button-2').on('click', function() {
    $(this).attr('disabled', true);
  });
  $('#button-3').on('click', function() {
    $('#button-message').html('Button 3 was clicked.');
  });
  $('.shape').on('click', function() {
    console.log($(this).attr('class'));
  });
  $('.shape').on('click', function() {
    $(this).hide();
  });
  $('.shape').on('click', function() {
    $(this).parent().remove();
  });
  $('.container').on('click', function() {
    $(this).children().remove();
  });
  $('a').on('mouseenter', function() {
    console.log($(this).attr('href'));
  });
  $('.button').on('click', function() {
    console.log("Button " + $(this).attr('id') + " was clicked.")
  });
});