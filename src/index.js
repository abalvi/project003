//import React from 'react';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './index.css';

// className="room" is for CSS

// This is the alternate arrangement done in class. Both can be used.
// Also, instead of Room() function inside index.js, a separate file can be made Room.js
// and then called inside the ReactDOM.render like we have done for previous examples.
function Room(){
  const [isLit, setLit] = useState(false);
  const brightness = isLit ? "lit" : "dark";

  function updateLit(){
      alert('Button pressed');
      setLit(!isLit);
  }  
return(
  <div className={`room ${brightness}`}>The room is {isLit ? "Lit" : "Dark"}
    <br />
    <button onClick={updateLit}>Toggle Button</button>
  </div>
);
}

// This is the original implementation for the Room light toggle
/*
function Room(){
    const [isLit, setLit] = useState(false);
    const brightness = isLit ? "lit" : "dark";
return(
    <div className={`room ${brightness}`}>The room is {isLit ? "Lit" : "Dark"}
    <br />
    <button onClick={() => setLit(!isLit)}>
      Toggle Button
    </button>
    </div>
);
}
*/

ReactDOM.render(
  <Room />,
  document.getElementById('root')
);
