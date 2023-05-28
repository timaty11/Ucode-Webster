import React from "react";
import "../../css/popup.css";


const Popup = ({ active, setActive, popupContent, children }) => {
  
  return (
    <div className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
      <div className={active ? "popup__content active" : "popup__content"} onClick={e => e.stopPropagation()}>
        { popupContent ? popupContent : children}
      </div>
    </div>
  )
}

export default Popup;
