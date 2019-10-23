import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Helmet from 'react-helmet';

import HobbiesBoxContainer from '../containers/HobbiesBoxContainer.jsx';

export default () => (
  <div className="c-hobbie-box">
    <Helmet title="That's my hobbies" />  
    <HeadlineWithFocus><span>Things i do in </span>my LIFE</HeadlineWithFocus>
    <HobbiesBoxContainer/>

    
    
   
  </div>
);