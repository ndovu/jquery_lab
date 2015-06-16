// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//

var playButton = function() {
  var songString = prompt("Enter a song to play: ");
  var song = parseSong(songString);
  $('#btn-play').html('Playing...');
  $('#btn-play').attr('disabled', true);
  playSong(song, 500, function() {
    $('#btn-play').html('Play');
    $('#btn-play').attr('disabled', false); 
  });
};

$(document).on('ready', function() {
  $('#btn-play').on('click', playButton);
});

// Get things going.
// promptAndPlay();