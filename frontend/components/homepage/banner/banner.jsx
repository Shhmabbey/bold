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
        <div className="banner-right">
          <img src="https://italic.com/static/images/banner-right-flower.png" alt="yellow flower"/>
        </div>
      </div>
    )
  }
}


export default Banner;
