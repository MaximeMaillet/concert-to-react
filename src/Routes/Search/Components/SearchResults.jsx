import React, {Component} from 'react';
import {connect} from "react-redux";
import ArtistCard from "../../../Components/Cards/ArtistCard/ArtistCard";

class SearchResults extends Component {

  render() {
    return (
      <div className="search-results row">
        {this.props.results.map((result, index) => (
          <ArtistCard className="col-md-4" key={index} {...result}/>
        ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.search.loading,
    results: state.search.results,
    endSearch: state.search.endSearch,
  }),
)(SearchResults);