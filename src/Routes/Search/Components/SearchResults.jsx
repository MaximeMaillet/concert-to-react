import React, {Component} from 'react';
import {connect} from "react-redux";
import ArtistCard from "../../../Components/Cards/ArtistCard/ArtistCard";

class SearchResults extends Component {

  render() {
    return (
      <div className="row row-eq-height">
        {this.props.results.map((result, index) => (
          <div className="col-4 col-md-4 col-xl-3 mt-2 mb-2" key={index}>
            <ArtistCard key={index} {...result} />
          </div>
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