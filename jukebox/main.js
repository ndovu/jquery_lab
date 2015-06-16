// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//

var playButton = function() {
  var songString = prompt("Enter a song to play: ");
  var song = parseSong(songString);
  playSong(song, 500);
};

$(document).on('ready', function() {
  $('#btn-play').on('click', playButton);
});

// Get things going.
// promptAndPlay();