import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from 'react-helmet';

import '../scss/main.scss';
require("typeface-exo");
require("typeface-roboto");

import ActionButtonContainer from '../containers/ActionButtonContainer';
import RemarkScreenContainer from '../containers/RemarkScreenContainer';

import MainFooter from '../components/MainFooter'; 
import MainHeader from '../components/MainHeader'; 
class DefaultLayout extends React.Component {

  render() {
    return (
      <div className="l-page-wrapper">
        <Helmet
           title="Iurii Kalashnikov"
          meta={[{ 
            name: 'description', 
            content: `I build web interfaces using: JavaScrip, ES2015, Babel, HTML5, CSS, CSS3, React, Gatsby` 
          }]}
        />    
          
        <div  className={`l-page-container ${this.props.remarkScreenisActive && 'is-blurred'}`}>
          <MainHeader />
          <main className="l-main">
            {this.props.children()}
          </main>
          <MainFooter />
        </div>
        {
          (this.props.location.pathname === '/'
          || this.props.location.pathname === '/contact/') 
          && 
          <ActionButtonContainer 
            locationPathName={this.props.location.pathname}
          />
        }  
        <RemarkScreenContainer 
          locationPathName={this.props.location.pathname}
        />
      </div>
    
    )
  }  
}

const mapStateToProps = (state, ownProps) => (
  { remarkScreenisActive: state.remarkScreen.isActive }
)



export default connect(mapStateToProps, null)(DefaultLayout);

