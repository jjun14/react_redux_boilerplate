import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  Home
} from './containers'

/** Routes in Alphabetical Order **/
export default (store) => {
  return (
    <Route path='/' component ={App}>
      { /* Home Route */ }
      <IndexRoute component={Home} />
      {  /* Routes go here */ }
      { /* Catch */ }
    </Route>
  );
};
