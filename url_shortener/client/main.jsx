import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; // importing named export
                                    // instead of ReactDOM


// Challenge, breakout Signup into its own file
// to do so:
//    - inside of imports/ui
//        - create the Signup.jsx
//        - define the component and export as default
//    - import and use it in client/main.jsx


class Signup extends React.Component {
  render() {
    return (
      <p>Signup component placeholder</p>
    );
  }
};

// Challenge 2, create a Link component
// to do so:
//  - create imports/ui/Link.jsx
//  - import Link
//  - render Link (just replace Signup in render)


Meteor.startup(() => {
  render(<Signup />, document.getElementById('react-target'));
});
