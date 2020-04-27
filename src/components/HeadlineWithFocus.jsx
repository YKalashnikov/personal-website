import React from 'react';

function HeadlineWithFocus(props) {
  const [animation, setAnimation] = React.useState({animationClassName: ''})
  const inputRef = React.useRef("myImgContainer");

  React.useEffect(()=>{
    setTimeout(() => {
      setAnimation({
        animationClassName: 'c-headline-focus--animation'
      });
    },5);    
  },[])

    return (
        <h1 
          className={`c-headline-focus
            ${props.modifierClassNames} 
            ${animation.animationClassName}` } 
          ref={inputRef}
        >            
          {props.children }
        </h1>
    )
}

export default HeadlineWithFocus; 

