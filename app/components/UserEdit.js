import React from 'react';
import { Link } from 'react-router';

class UserEdit extends React.Component {
  render() {
    return (
      <div>
        <p>this is the user edit <code>{this.props.params.id}</code></p>
        <Link to='/user'></Link>
      </div>
    );
  }
}

module.exports = UserEdit;
