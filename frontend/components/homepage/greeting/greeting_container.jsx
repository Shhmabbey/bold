import React from 'react';
import GreetingAbout from './greeting_about';
import GreetingPromo from './greeting_promo';

class GreetingContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Greeting_Container">
        <GreetingPromo />
        <GreetingAbout />
      </div>
    )
  }
}


export default GreetingContainer;
