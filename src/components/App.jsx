class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =
    {
      videoList:window.exampleVideoData,
      currentVideo:window.exampleVideoData[0],
      keyword :'dogs'
    };
  }


  handleSearchClick() {
    this.props.searchMovies(query, callback);
  }
  changeVideo(serchResult){
    this.setState({currentVideo:serchResult[0]});
    this.setState({videoList:serchResult});
  }
  handleVideoTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  handleSubmitClick(input) {
    this.setState({keyword:input});
    this.props.search({ key: window.YOUTUBE_API_KEY, query: this.state.keyword, maxResults: 10 },
      (response) => this.changeVideo(response.items).bind(this));

  }
  //handleUserInPutClick
  render(){
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSubmitClick = {this.handleSubmitClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.videoList} handleVideoTitleClick ={this.handleVideoTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
