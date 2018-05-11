class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  handleChange (e) {
    console.log(e);
    this.setState({query: e.target.value});
  }

  render(){
    return(
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={(e) => this.handleChange(e)}/>
        <button className="btn hidden-sm-down" onClick={() => this.props.handleSearch(this.state.query)}>
          <span className="glyphicon glyphicon-search">
          </span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
