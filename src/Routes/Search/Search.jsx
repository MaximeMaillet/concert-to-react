import React, {Component} from 'react';

import Header from '../../Components/Header/Header';
import SearchBar from "../../Components/SearchBar/SearchBar";

export default class Search extends Component {

  onChange = () => {

  };

  render() {
    return (
      <div>
        <Header />
        <section className="search-section container">
          <div className="row">
            <div className="col-md-12">
              <SearchBar
                onChange={this.onChange}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}