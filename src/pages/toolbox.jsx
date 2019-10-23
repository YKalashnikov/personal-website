import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Helmet from 'react-helmet';

import ToolBoxListContainer from '../containers/ToolBoxListContainer';

export default () => (
  <div className="c-content-box">
    <Helmet title="That's my toolbox" />  

    <HeadlineWithFocus><span>These are pieces of </span>my toolbox</HeadlineWithFocus>
    <ToolBoxListContainer />
   
  </div>
);