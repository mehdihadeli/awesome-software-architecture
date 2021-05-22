(function( {
  //var stopPlayAt = 33, // Stop play at time in seconds //Mike Oldfield - The Top Of The Morning
  //var stopPlayAt = 21, // Stop play at time in seconds // Chariots of Fire Theme • Vangelis 
  //var stopPlayAt = 54, // Stop play at time in seconds // Jan Hammer - Crockett's Theme
  //var stopPlayAt = 27, // Stop play at time in seconds // MUSE - The Dark Side
  //var stopPlayAt = 4, // Stop play at time in seconds // MUSE - The Dark Side
  var stopPlayAt = 2, // Stop play at time in seconds // MUSE - The Dark Side
      stopPlayTimer;   // Reference to settimeout call

  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script";
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script"0;
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag;

  // This function creates an <iframe> (and YouTube player
  // after the API code downloads.
  var player;
  window.onYouTubeIframeAPIReady = function( {
    player = new YT.Player("player", {
      "height": "45",
      "width": "100%",
      "playerVars": { 'autoplay': 1, 'controls': 2, 'showinfo': 0, 'autohide': 2 },
      //"videoId": "uuvDToxhZO0",  //Mike Oldfield - The Top Of The Morning
      //"videoId": "CSav51fVlKU", // Chariots of Fire Theme • Vangelis 
      //"videoId": "QQ_3S-IQm38", // MUSE - Thought Contagion
      "videoId": "e0UWT0dFSQE", // MUSE - The Dark Side
      "events": {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange
      }
    };
  }

  // The API will call this function when the video player is ready.
  // This automatically starts the video playback when the player is loaded.
  function onPlayerReady(event {
    event.target.playVideo(;
  }

  // The API calls this function when the player's state changes.
  function onPlayerStateChange(event {
    var time, rate, remainingTime;
    clearTimeout(stopPlayTimer;
    if (event.data == YT.PlayerState.PLAYING {
      time = player.getCurrentTime(;
      // Add .4 of a second to the time in case it's close to the current time
      // (The API kept returning ~9.7 when hitting play after stopping at 10s
      if (time + .4 < stopPlayAt {
        rate = player.getPlaybackRate(;
        remainingTime = (stopPlayAt - time / rate;
        stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000;
      }
    }
  }
  function pauseVideo( {
    player.pauseVideo(;
  }
}(;
