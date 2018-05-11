
class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      selected: {},
      allTheVideos: []
    };
  }

  handleClick(video) {
    this.setState({selected: video});
  }
  
  handleSearch(keyWord) {
    // console.log('THIS SHOULD NOT BE CONSOLE LOGGING');
    // console.log(keyWord);
    const app = this;
    app.props.searchYouTube({ max: 25, query: keyWord, key: window.YOUTUBE_API_KEY }, function(data){
      app.setState({allTheVideos: data.items});
    });
    console.log(keyWord);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch.bind(this)}/>
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
