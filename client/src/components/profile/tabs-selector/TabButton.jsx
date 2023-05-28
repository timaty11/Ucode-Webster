import React from 'react';

import '../../css/Profile.css';


const TabButton = ({ id, slideNumber, active, category, name }) => {
  const tabChangeAnimationHandle = () => {
    const buttonClassList = document.getElementsByClassName(category);
    for (let i = 0; i < buttonClassList.length; i++) {
      buttonClassList.item(i).classList.remove("tab-button-active");
    }
    // Assign to our elemnt id the blue hyi
    document.getElementById(id + "-tab-wrapper").classList.add("tab-button-active");
  }

  return (
    <li className="mr-2" role="presentation">
      <div id={`${id}-tab-wrapper`} className={`${category} tab-button-wrapper transition-all ${active ? "tab-button-active" : ""}`}>
        <button
          className={"tab-button group inline-block p-4 rounded-t-lg"}
          onClick={tabChangeAnimationHandle}
          data-carousel-slide-to={slideNumber}
          id={id + "-tab"}
          type="button">
          { name }
        </button>
        <div className="tab-button-border"></div>
      </div>
    </li>
  )
}

export default TabButton;
