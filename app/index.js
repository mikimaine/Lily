import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';

// class Hello extends React.Component {
//   click() {
//     console.log('click!');
//   }

//   render() {
//     return (
//       <div onClick={this.click}>Hello, {this.props.name}</div>
//     )
//   }
// }

render(routes, document.getElementById('app'));
