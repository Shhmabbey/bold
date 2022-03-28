import React from 'react';

class GreetingPromo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Greeting_Promo">
        <div className="Greeting_Promo_Left">
          <div className="Content_Box">
            <div className="Align">
              <h1 className="Greeting_Promo_Title" data-acsb-title="true">
                The 14k Solid Gold Jewelry Collection
              </h1>
              <p className="Greeting_Promo_Body">
                Introducing elevated classics in 14k solid gold — fine jewelry made to be worn every day and last a lifetime.
              </p>
              <a href="/" >
               <button id="Shop_Now_Button">SHOP NOW</button>
              </a>
            </div>
          </div>
        </div>
        <div className="Greeting_Promo_Right">
          <div data-acsb-inner-focus="true">
            <a href="/">
              <img src='https://italic.com/_next/image?url=https%3A%2F%2Fair-prod.imgix.net%2Fc30410f1-91e3-4a2c-9a3d-34eb7f4bbf8e.jpg%3Fw%3D1920%26h%3D1497%26fm%3Djpg%26fit%3Dcrop&w=1200&q=80' alt="the-14k-gold-jewelry-collection" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}


export default GreetingPromo;
