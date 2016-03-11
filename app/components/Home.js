import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.params.name}</h1>
        <div>HOME</div>
      </div>
    );
  }
}

module.exports = Home;
