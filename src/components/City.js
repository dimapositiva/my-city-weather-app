import React from 'react';

const City = (props) =>
  <div className = "city-list" >
    <li onClick={ props.handleClick }>
      { props.cityName }
    </li>
    <span className="delete-button" onClick={ props.onDelete }> 
      X
    </span>
  </div>

export default City;
