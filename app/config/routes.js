import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './../components/Main';
import Dashboard from './../components/Dashboard';
import User from './../components/User';
import UserEdit from './../components/UserEdit';

// HTML5 Push State
// <Router history={browserHistory}>
module.exports = (
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute component={Dashboard} />
      <Route path='/user' component={User}>
        <Route path="/user/:id" component={UserEdit}></Route>
      </Route>
    </Route>
  </Router>
);

// const routeConfig = [
//   {
//     path: '/',
//     component: Main,
//     indexRoute: { component: Dashboard },
//     childRoutes: [
//       {
//         path: '/user',
//         component: User,
//         childRoutes: [
//           {
//             path: '/user/:id',
//             component: UserEdit,
//             onEnter(nextState, replace) {
//               console.log('enter...');
//             },
//             onLeave(nextState, replace) {
//               console.log('leave...');
//             }
//           }
//         ]
//       }
//     ]
//   }
// ];

// module.exports = (
//   <Router routes={routeConfig} />
// );
