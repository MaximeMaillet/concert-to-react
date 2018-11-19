import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './Pagination.scss';

export default class Pagination extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.loading && nextProps.endSearch;
  }

  render() {
    const {pagination, generateLink} = this.props;

    if(!pagination) {
      return null;
    }

    const {endPage, pageCount, current, pagesInRange, first, last} = pagination;

    if(pageCount === 0) {
      return null;
    }

    console.log('render');
    console.log(pagination);
    return (
      <nav aria-label="Pagination" className={`pagination ${this.props.className}`}>
        <ul className="pagination-ul">
          {current > first ?
            <li>
              <div onClick={() => generateLink(current - 1)} className="page-link">
                Précédent
              </div>
            </li>
            : ''
          }

          {pagesInRange.map((page, key) => (
            <li key={key}>
              <div onClick={(e) => page !== current ? generateLink(page) : e.preventDefault()} className={`page-link ${page !== current ? '':'disabled'}`}>
                {page}
              </div>
            </li>
          ))}

          {current !== last ?
            <li>
              <div onClick={() => generateLink(current + 1)} className="page-link">
                Suivant
              </div>
            </li>
            : ''
          }
        </ul>
      </nav>
    );
  }
}