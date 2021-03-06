import React, {Component} from 'react';
import Select from 'react-select';
import {SearchIcon} from "../../styles/icons/Icons";

import './search-bar.scss';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
  }

  onChange = (values) => {
    const newValues = values.map((val) => ({
      label: val.label,
      value: val.value,
    }));

    this.setState({values: newValues});

    if(this.props.onChange) {
      this.props.onChange({
        name: values.map((val) => val.value).join(' '),
        page: 1,
      });
    }
  };

  render() {
    return (
      <div className="search-bar">
        <Select.Creatable
          className="search-bar-input"
          placeholder="Artist, event, location, ..."
          multi={true}
          arrowRenderer={null}
          searchPromptText={null}
          noResultsText={null}
          onChange={this.onChange}
          value={this.state.values}
          promptTextCreator={(label) => label}
        />
        <button className="btn btn-primary btn-search-bar">
          <SearchIcon className="search-icon" />
        </button>
      </div>
    );
  }
}