import React from "react";

// import '../../flags/css/flag-icon.min.css'; 


const LanguageSelectElement = ({ i18n, lng }) => {
  return (
    <div className = "bg-gray-100 dark:bg-dark-bg-700  ">
      <button className="relative group overflow-hidden px-4 h-7 rounded-md ripple focus:outline-none  hover:shadow hover:shadow-lg  hover:border-blue-300 hover:bg-blue-100 dark:hover:bg-dark-bg-800">
        <div aria-hidden="true" className="transition duration-300 group-hover:-translate-y-7">
          <div className="h-7 flex items-center justify-center ">
            <div className={`flag-icon flag-icon-${lng === 'en' ? 'us' : lng}`} />
          </div>

          <div className="h-7 flex items-center justify-center">
            <div onClick={() => i18n.changeLanguage(lng)} key={lng} className={i18n.resolvedLanguage === lng } disabled={i18n.resolvedLanguage === lng}> 
              {lng}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default LanguageSelectElement;
