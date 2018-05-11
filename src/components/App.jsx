
class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      selected: exampleVideoData[0],
      allTheVideos: exampleVideoData
    };

    this.options = {
      //query: text,
      max: '25'
    };
  }

  handleClick(video) {
    
    this.setState((state) => ({selected: state = video}));
  }
  
  handleSubmit(keyWord) {
    // searchYouTube({max: 25, query: event, key: YOUTUBE_API_KEY}, function(data){
    //   this.setState((state) => ({allTheVideos: state = data.items}))
    // })
    //console.log(keyWord);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSubmit={this.handleSubmit.bind(this)}/>
          </div>
        </nav>
        <div className="row"> 
          <div className="col-md-7">
            <VideoPlayer video={this.state.selected} />
          </div>
          <div className="col-md-5" >
            <VideoList videos={this.state.allTheVideos} handleClick={this.handleClick.bind(this)}/>
               
          </div>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<window.VideoList />,document.getElementById('app'))

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
