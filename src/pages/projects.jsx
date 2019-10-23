import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import Projects from "../components/Projects.jsx"

export default () => (
  <div>
    <Helmet title="My projects" />

    <HeadlineWithFocus>
     Projects
    </HeadlineWithFocus>
    <Projects/>
  </div>
);
