import React from 'react';
import iurii from '../images/iurii.png';


const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img 
      src={(props.modifierClasses === 'c-avatar--as-author')  ? iurii : iurii } 
      alt="IK" 
    />
  </div>
)

export default Avatar;