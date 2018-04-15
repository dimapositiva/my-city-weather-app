import React from 'react';

const Display = (props) =>
  <div className="outputDisplay">
    <br/>
    <p className="temp-wrapper">Temperature:
      <span className="temp">{ props.tempOutput }</span>
      <span className="temp-symbol">&nbsp;°C</span>
    </p>
    <p className="cond-wrapper">Conditions:
      <span className="cond">{ props.condOutput }</span>
    </p>
  </div>

Display.defaultProps = {
  tempOutput: ' not loaded yet',
  condOutput: ' not loaded yet'
};

export default Display;
