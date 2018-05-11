var searchYouTube = (options, callback) => {
  $.ajax({
    url:'https://www.googleapis.com/youtube/v3/search',
    data : {
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      key: options.key, 
      type: 'video',
      videoEmbeddable: 'true'
    },
    success(data) {
      callback(data);
    } 
  });
  
};



window.searchYouTube = searchYouTube;
