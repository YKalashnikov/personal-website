import React, {Component} from "react";
import HobbiesItem from "../components/HobbiesItem.jsx";
import ToolBoxPopOver from "../components/ToolBoxPopOver";
import FaUser from "react-icons/lib/fa/user";
import hobbies from "../data/hobbies";
//import Instagram from "../components/Instagram"
import { FaPauseCircleO, FaEyeSlash, FaEye, FaInstagram } from  "react-icons/lib/fa/";
import { MdSkipNext, MdPause } from "react-icons/lib/md/";
import {IoIosNutritoutline} from "react-icons/lib/io/"



class HobbiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      showResult:true
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }  
  onClick(){
    this.setState({
      showResult:!this.state.showResult
    })
    
  }
  onClickHandler(e, id) {
    this.props.itemOnClick(e, id);
  }
 

  render() {
    if(typeof window !== 'undefined') {
      const Instagram = require ("../components/Instagram")
    return (
      <ul className="c-hobbies-list" >
      {
        hobbies.map((item) => (
          <HobbiesItem 
            id={item.id}
            key={item.id}
            label={item.label}  
            pic={item.pic}
            onClick={this.onClickHandler} 
            activated={this.props.activatedItem}
            popOverPosition={this.props.popOverPosition}   
          />
        ))
      }
   {/* <div onClick={this.onClick} className="instagram">
      <ul> <FaInstagram/> On / Off</ul>
    </div> */}
  {/*  {this.state.showResult ? null: <Instagram/>  }  */} 
      </ul>
    )
   
  }
  else {
    return null;
  }
}
};


export default HobbiesList;