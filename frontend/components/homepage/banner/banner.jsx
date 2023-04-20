import React from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="banner">
        <div className="banner-left">
          <img src="https://italic.com/static/images/banner-left-flower.png" alt="purple flowers" />
        </div>
        <div className="Center_Banner">
          <p className="Banner_Text" >Like what you see?</p>
          <a className="Banner_button" href="https://github.com/Shhmabbey" target="_blank">Checkout my work on Github</a>
          <a className="Banner_button" href="https://www.linkedin.com/in/san-francisco-software-engineer/" target="_blank">View my LinkedIn</a>
        </div>
        <div className="banner-right">
          <img src="https://italic.com/static/images/banner-right-flower.png" alt="yellow flower"/>
        </div>
      </div>
    )
  }
}

export default Banner;
