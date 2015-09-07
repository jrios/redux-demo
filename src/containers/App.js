'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <ul className="navigation-menu">
          <li className="navigation-item"><Link to='/'>Your Surveys</Link></li>
          <li className="navigation-item"><Link to='/survey-builder'>Survey Builder</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}