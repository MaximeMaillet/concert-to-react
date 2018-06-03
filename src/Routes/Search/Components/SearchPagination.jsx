import React, {Component} from 'react';
import {connect} from "react-redux";

class SearchPagination extends Component {
  render() {
    return (
      <div>Pagination</div>
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.loading,
    pagination: state.pagination,
    endSearch: state.endSearch,
  }),
)(SearchPagination);