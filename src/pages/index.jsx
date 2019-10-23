import React from "react";
import { FaEnvelopeO, FaTwitter, FaGithub, FaInstagram, FaPhone } from "react-icons/lib/fa/";
import HeadlineWithFocus from "../components/HeadlineWithFocus";




const Index = props => {
  return (
    
    <div className="c-content-box" >
      <h2>Hi, it's Iurii Kalashnikov</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        I'm a front-end web 
      </HeadlineWithFocus>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        developer
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline 
          c-content-box__subheadline--with-button
        `}
      >
        I build web interfaces
      </h2>
      
    </div>
  );
};

export default Index;
