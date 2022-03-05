import React from 'react';   
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; // importing named export
                                    // instead of ReactDOM
import Signup from './../imports/ui/Signup.jsx';      // challenge 01
import Link from './../imports/ui/Link.jsx';          // challenge 02

// Challenge 01, breakout Signup into its own file
// to do so:
//    - inside of imports/ui
//        - create the Signup.jsx
//        - define the component and export as default
//    - import and use it in client/main.jsx


// class Signup extends React.Component {
//   render() {
//     return (
//       <p>Signup component placeholder</p>
//     );
//   }
// };

// Challenge 2, create a Link component
// to do so:
//  - create imports/ui/Link.jsx
//  - import Link in main.jsx
//  - render Link instead of Signup 
//      - (just replace Signup with Link in render below)


Meteor.startup(() => {
  // render(<Signup />, document.getElementById('react-target'));  // challenge 01
  render(<Link />, document.getElementById('react-target'));    // challenge 02
});