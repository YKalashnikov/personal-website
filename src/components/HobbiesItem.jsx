import React from "react";
import "../scss/components/_hobbies.scss"


const HobbiesItem = ({id,pic,label,onClick,activated,popOverPosition}) => {
   function onClickHandler(e) {
    e.target.blur();
    e.target.style["z-index"] = 1;
    onClick(e, id);
  }

  return (
    <li className="c-hobbies-list__item">
      <button
        id={id}
        onClick={onClickHandler}
        className={`c-hobbies-list__btn 
          ${activated === id ? "c-hobbies-list__btn--is-active" : ""}
          ${activated === id && popOverPosition
            ? popOverPosition === "under"
              ? "c-hobbies-list__btn--is-above"
              : "c-hobbies-list__btn--is-under"
            : ""}`} 
        
        style={{background: `url('${pic}')  center`, zIndex: activated === id ? 1 : "" }}
      >
        
        <div className="label">{label} </div>
      </button>
    </li>
  );
};

export default HobbiesItem;