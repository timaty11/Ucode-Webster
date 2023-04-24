import React from 'react';
import { useNavigate } from 'react-router-dom';


const AuthButton = ({ name, path, type }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => { navigate(path); }} type="submit" className={"btn-" + type}>
        <svg width="150px" height="60px" viewBox="0 0 150 60" className={"border-" + type}>
          <polyline points="149,1 149,59 1,59 1,1 149,1" className="bg-line"/>
          <polyline points="149,1 149,59 1,59 1,1 149,1" className="hl-line"/>
        </svg>
        <p>{ name }</p>
      </button>
    </div>
  );
}

export default AuthButton;
