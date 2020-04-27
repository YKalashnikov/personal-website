import React from 'react';
import Terminal from "../components/Terminal.jsx";
import Helmet from 'react-helmet';
import HeadlineWithFocus from '../components/HeadlineWithFocus';


export default props => (
    <div>
      <Helmet title="Terminal"/>
      <HeadlineWithFocus>
     Terminal
    </HeadlineWithFocus>
      <Terminal/>
    </div>
)




