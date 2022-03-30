import React from 'react';

const ReviewCard = ( {review} ) => {
  return (
    <div key={review.id} className="Review_Card_container" >
      <div className="Review_content">
        <div className="Review_Stars_Holder">
          <div className="Review_Stars">
            <svg viewBox="0 0 12 11" fill="blacklight" xmlns="http://www.w3.org/2000/svg" width="9px">
              <path d="M9.085 10.749a.357.357 0 01-.21-.067L6.006 8.6l-2.87 2.08a.357.357 0 01-.548-.403l1.12-3.316-2.902-1.99a.357.357 0 01.201-.651h3.58L5.665.997a.357.357 0 01.679 0l1.08 3.325h3.58a.357.357 0 01.202.652L8.304 6.962l1.119 3.315a.357.357 0 01-.338.472z" fill="#171722"></path>
            </svg>
            <div className="Star_Rating">{review.rating}</div>
          </div>
        </div>
        <div className="Review_Body">
          <div className="Review_Body_Title">{review.title}</div>
          <div className="Review_Body_Author_Details_Container">
            <div className="Review_Body_Author_Details">
              <div className="Italic_Credits">
                <svg className="italic-bold-logo_svg__italic-bold-logo" viewBox="0 0 36 37" xmlns="http://www.w3.org/2000/svg" ><path d="M33.889 14.877c-.723-.762-1.407-1.465-1.72-2.227-.332-.801-.371-1.875-.39-2.91-.04-1.485-.079-3.028-1.017-3.966-.938-.938-2.482-.977-3.967-1.016-1.036-.039-2.092-.058-2.912-.39-.763-.313-1.466-.997-2.228-1.72C20.54 1.595 19.407.5 18.019.5c-1.407 0-2.54 1.094-3.635 2.13-.762.722-1.466 1.406-2.228 1.718-.801.332-1.876.371-2.912.39-1.485.06-3.03.098-3.967 1.036-.938.938-.977 2.48-1.016 3.965-.02 1.036-.06 2.09-.391 2.91-.313.763-.997 1.466-1.72 2.228C1.094 15.97 0 17.103 0 18.51c0 1.406 1.094 2.54 2.13 3.633.723.762 1.407 1.465 1.72 2.227.332.8.371 1.875.391 2.91.04 1.485.078 3.028 1.016 3.965.938.938 2.482.977 3.968 1.016 1.036.04 2.09.059 2.912.39.762.313 1.465.997 2.228 1.72C15.459 35.426 16.593 36.5 18 36.5c1.407 0 2.54-1.094 3.635-2.13.762-.722 1.466-1.405 2.228-1.718.801-.332 1.876-.371 2.912-.39 1.485-.04 3.03-.079 3.967-1.017.938-.937.978-2.48 1.017-3.965.02-1.035.058-2.09.39-2.91.313-.762.997-1.465 1.72-2.227C34.925 21.049 36 19.916 36 18.51c.02-1.407-1.055-2.54-2.11-3.633zm-3.596 8.457c-.39.997-1.407 1.505-2.404 2.012-.645.332-1.27.645-1.661 1.075-.43.449-.743 1.113-1.056 1.777-.469.997-.957 2.012-1.876 2.403-.918.41-1.993.059-3.049-.273-.684-.215-1.387-.43-2.013-.43-.586.02-1.23.254-1.915.488-.743.274-1.505.547-2.228.547a2.26 2.26 0 01-.88-.156c-.996-.39-1.504-1.407-2.012-2.403-.333-.644-.645-1.27-1.075-1.66-.45-.43-1.114-.742-1.779-1.055-.997-.469-2.013-.957-2.404-1.875-.41-.918-.058-1.993.274-3.047.215-.684.45-1.407.43-2.012-.02-.586-.254-1.231-.489-1.915-.371-1.054-.781-2.129-.39-3.105.39-.997 1.407-1.505 2.403-2.012.645-.332 1.27-.645 1.662-1.075.43-.449.742-1.113 1.055-1.777.469-.996.958-2.012 1.876-2.403.919-.41 1.994-.058 3.049.274.684.214 1.388.449 2.013.43.586-.02 1.231-.255 1.915-.489 1.056-.371 2.13-.781 3.127-.39.997.39 1.505 1.406 2.013 2.402.332.645.645 1.27 1.075 1.66.45.43 1.114.743 1.779 1.055.996.469 2.013.957 2.404 1.875.41.918.058 1.993-.274 3.047-.215.684-.45 1.407-.43 2.012.02.586.254 1.231.489 1.915.37 1.035.762 2.11.37 3.105z" fill="#fff"></path><path d="M18.02 27.007c4.695 0 8.501-3.805 8.501-8.497 0-4.693-3.806-8.497-8.502-8.497-4.695 0-8.501 3.804-8.501 8.497 0 4.692 3.806 8.497 8.501 8.497z" fill="#fff"></path>
                </svg>
              </div>
              <div id="name">Emma M {review.reviewer_id}</div>
              <div className="Spacer"></div>
              <div className="Date">March 12, 2022</div>
              <div className="Spacer"></div>
              <div className="ml-s10 h-s10 min-w-s10">
                <img src="https://italic.com/static/icons/checkfilled.svg" alt="verified" className="h-full w-full"/>
              </div>
            </div>
          </div>
          <div className="Review_Comment">
            <div className="Review_Comment_Body">
              <p>{review.body}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Helpful">
        <div>
          <div>
            <div className="Review_Button" role="button" tabIndex="0">
              <span className="Review_Button_Text">Helpful</span>
              <span className="Helpful_Score">{review.helpful}</span>
            </div>
            <div className="Review_Button" role="button" tabIndex="0">
              <span className="Review_Button_Text">Helpful</span>
            </div>
          </div>
          <div className="Flag" role="button" tabIndex="0">
            <svg viewBox="0 0 126 167" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" fill="#C5C5C5" width="7px" height="9px" className="overflow-visible mr-s5"><path d="M56.155.002L56.152 0l-.001.002H0v166.002h13.509V83.299h41.599l20.791 13.715h49.412V13.718H76.945L56.165.009V.002h-.01z"></path></svg>
            Flag Review
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReviewCard;

