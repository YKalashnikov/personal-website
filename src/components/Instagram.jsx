import React, { Component } from 'react'
import request from 'superagent';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import "../scss/components/_instagram.scss"

import { MdErrorOutline } from "react-icons/lib/md/"


const apiUrl = `https://api.instagram.com/v1/users/self/media/recent/`;
const token = `620832959.1677ed0.12e736449c8d415496c1a645c61e3a7e`;


const BackArrow = (props) => (
    <div className="backArrow" onClick={props.previousImage} >
      <i className="fa fa-angle-left " aria-hidden="true"></i>
    </div>
  )
  
  const NextArrow = (props) => (
    <div className="nextArrow" onClick={props.nextImage} >
      <i className="fa fa-angle-right " aria-hidden="true"></i>
    </div>
  )
  
  
class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
          photos: [],
          slideCount: 0,
          isLoading:false
        }
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
      }
    
      componentWillMount() {
        this.fetchPhotos();
      
      }
  
    fetchPhotos() {
      request
        .get(`${apiUrl}?access_token=${token}`)
        .then((res) => {
            console.log(res)
          this.setState({
           photos: res.body.data,
           isLoading:true
         
          })
         
        })
       
    }

    nextImage() {
      this.setState({ slideCount: this.state.slideCount + 1 })
      
    }
  
    previousImage() {
      this.setState({ slideCount: this.state.slideCount - 1 })
      
    }
  
    
    render() {
        const {isLoading} = this.state;
      return (
        <div>
          <div className="adventure">
          {this.state.slideCount !== 0 ? <BackArrow className="backArrow" previousImage={this.previousImage}/> : ''}
          { !isLoading ? 
          <p> <MdErrorOutline/> Image is not loading <MdErrorOutline/></p> 
            :
            this.state.photos.map((photo, key) => {
              if (this.state.photos.indexOf(photo) === this.state.slideCount) {
              return (
                <div key={photo.id} style={{margin: '0 auto'}}>
                <img className="pic" src={photo.images.standard_resolution.url} alt={photo.caption}/>
                {<div className="caption">
                {photo.location !== null ? photo.location.name : 'No location'}
               </div>}
             </div>
           )
         }
       return ''
     })
     }
    
     {this.state.slideCount !== (this.state.photos.length - 1) ? <NextArrow  nextImage={this.nextImage}/> : ''}
    
     </div>
      </div>
      );
  
    }
  }
   export default Instagram;

     
