var searchYouTube = (options, callback) => {
  console.log(options, callback);
  $.get('https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      q: options.query,
      key: options.key,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    })
    .done(callback);
  //callback(response.results[0]);


};

window.searchYouTube = searchYouTube;
