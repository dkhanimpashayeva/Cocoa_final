import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
 <div className="accordion-tab">

 <div className="d-flex justify-content-between align-items-center">
      <div className='accordion-title'>{title}</div>
      <div className='accordion-btn'>{isActive ? '-' : '+'}</div>
    </div>
 </div>
    {isActive && <div className="accordion-content">{content}</div>}
      </div>
  </div>
 
  );
};

export default Accordion;