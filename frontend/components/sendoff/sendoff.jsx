import React, { useEffect, useState } from "react";
import { closeModal } from "../../actions/modal_actions";


export const Sendoff = () => {
  return (
    <div className="Session_Form_Container">
      <div role="button" tabIndex="0" className="Close_Button">
        <img onClick={() => closeModal()} src="https://italic.com/static/icons/close.svg" height="10" width="10" className="Close" alt="close" />
      </div>
      <div>
        <p className="Login_Header Login_Header_Greeting" >Thanks for visiting!</p>
      </div>
      <div>
        <a href="https://github.com/Shhmabbey" target="_blank"><button className="checkout__contents__button" >View my Linkedin Profile</button></a>
        <a href="https://github.com/Shhmabbey" target="_blank"><button className="checkout__contents__button" >View my Github Profile</button></a>
      </div>
    </div>
  )
};