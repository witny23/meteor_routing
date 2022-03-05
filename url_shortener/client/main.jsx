import React from 'react';   
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; 
// BrowserRouter keeps UI in sync with the url
// Router is a React component and is needed to create the Router
// Route is used every time we make a new route like Signup or Link
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './../imports/ui/Signup.jsx';      
import Link from './../imports/ui/Link.jsx';   
import NotFound from './../imports/ui/NotFound.jsx';
import Login from './../imports/ui/Login.jsx';    


// create react-router routes
const routes = (  // jsx in the parenthesis
                  // the jsx is a bunch of instances of route with one instanc of router

  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />{/* the "/" is the default root directory http://localhost:3000/ */}
      {/* the exact forces the match not to have anything past the forward slash like /links */ }
      <Route path="/signup" element={<Signup />}/>{/*path and component prop used to render component*/}
      <Route path="/links" element={<Link />}/>{/*the /link is the url we want to see*/}
      <Route path="*" element={<NotFound />} />{/* using Routes, if nothing matches - load NotFound */}
    </Routes>
  </BrowserRouter>

);




Meteor.startup(() => {
  // render the routes which are listening for a path
  render(routes, document.getElementById('react-target'));   
  // render(<Link />, document.getElementById('react-target'));  
});