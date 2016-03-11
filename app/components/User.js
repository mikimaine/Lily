import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
  render() {
    return (
      <div>
        <Link to='/user/12'>User Edit</Link>
        {this.props.children}
      </div>
    );
  }
}

module.exports = User;
