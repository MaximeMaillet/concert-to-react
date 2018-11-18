import React, {Component} from 'react';
import {toastr} from 'react-redux-toastr';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import history from '../../history';

import actions from '../../HOC/Search/actions';

import Header from '../../Components/Header/Header';
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResults from './Components/SearchResults';
import SearchPagination from './Components/SearchPagination';

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
      search: values,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <section className="search-section container">

              <SearchBar
                onChange={this.onChange}
              />

              <SearchResults
              />

              <SearchPagination
              />
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    endSearch: state.endSearch,
  }),
  (dispatch) => bindActionCreators({...actions}, dispatch)
)(Search);