import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import history from '../../history';

import actions from '../../HOC/Search/actions';

import Header from '../../Components/Header/Header';
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResults from './Components/SearchResults';
import Pagination from "../../Components/Pagination/Pagination";

import './Search.scss';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      search: null,
    };
    if(!props.isAuthenticated) {
      history.push('/');
    }

    props.search();
  }

  componentWillReceiveProps(nextProps, nextState) {
    if(!nextProps.isAuthenticated) {
      history.push('/');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.search !== this.state.search) {
      this.props.search(nextState.search);
    }
  }

  onChange = async(values) => {
    this.setState({
      search: {
        ...this.state.search,
        ...values
      },
    });
  };

  generatePaginationLink = (page) => {
    this.setState({
      search: {
        ...this.state.search,
        page,
      },
    });
    window.scrollTo(0,0);
  };

  render() {
    return (
      <div>
        <Header />
        <section className="container search-section">
          <div className="row mb-2">
            <div className="col-12">
              <SearchBar
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <SearchResults/>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              <Pagination
                generateLink={this.generatePaginationLink}
                pagination={this.props.pagination}
                loading={this.props.loading}
                endSearch={this.props.endSearch}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    endSearch: state.search.endSearch,
    loading: state.search.loading,
    pagination: state.search.pagination,
  }),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(Search);