import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import history from '../../history';

import Header from "../../Components/Header/Header";

import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    if(props.isAuthenticated) {
      history.push('/search');
    }
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.isAuthenticated ?
            ''
          :
            <section className="home-section d-flex flex-row">
              <div className="home-bloc">
                <Link to="/signin" className="btn btn-primary">Sign In</Link>
              </div>
              <div className="home-bloc">
                <Link to="/login" className="btn btn-primary">Log In</Link>
              </div>
            </section>
        }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  })
)(Home);