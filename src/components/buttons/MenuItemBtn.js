import React from "react";
import { useNavigate } from "react-router-dom";
// import '../../Assets/Styles/MenuItemButton.scss';
// import '../../Assets/Styles/Variables.scss'

function MenuItemBtn({ icon: IconComponent, title, count, color = 'grey', to, onClick ,size}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to); 
    } else if (onClick) {
      onClick(); 
    }
  };

  return (
    <button className="item-container" onClick={handleClick}>
      <div className="item-left-icon">
        {IconComponent && <IconComponent size={size} color={color}/>}
      </div>
      <div className="item-title">
        <span>{title}</span>
      </div>
      {count !== undefined && count > 0 && ( 
        <div className="item-right-icon">
          <span>{count}</span>
        </div>
      )}
    </button>
  );
}

export default MenuItemBtn;
