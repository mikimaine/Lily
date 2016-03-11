import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h3>MAIN</h3>
        <Link to='/user'>user</Link>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
