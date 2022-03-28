import React from 'react';

class GreetingAbout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Greeting_About">
        <div className="Greeting_About_Container">
          <div className="Greeting_About_Item">
            <img src="https://italic.com/static/images/orange.png" alt="An illustration.."/>
            <div className="Right_Text">
              <p className="Right_Text_Title">
                Premium Quality
              </p>
              <p className="Right_Text_Body">
                We rigorously test every product to ensure it meets or exceeds the quality of leading brands. Otherwise, we won't sell it.
              </p>
            </div>
          </div>
          <div className="Greeting_About_Item" data-acsb-possible-star="true">
            <img src="https://italic.com/static/images/star.png" alt="An illustration.."/>
            <div className="Right_Text">
              <p className="Right_Text_Title">
                Unparalleled Prices
              </p>
              <p className="Right_Text_Body">
                We've eliminated traditional brand and retail markups, so you pay 50-80% less for the exact same quality.
              </p>
            </div>
          </div>
          <div className="Greeting_About_Item">
            <img src="https://italic.com/static/images/oliveleaf.png" alt="An illustration.."/>
            <div className="Right_Text">
              <p className="Right_Text_Title">
                Straight From the Source
              </p>
              <p className="Right_Text_Body">
                Shopping on Italic means supporting a network of independent manufacturers (the same ones behind your favorite brands).
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default GreetingAbout;