import React from 'react';
// import './WebControls.css'; // Import your CSS file

const WebControls = () => {
  return (
    <div className="web-controls-container">
      <div className="logo">WEB CONTROL</div>
      <div className="section">
        PARAMETER SET ACT DIA E2P Act Pressure DIRECTION
      </div>
      <div className="parameter">
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" style={{ backgroundColor: "blue" }} />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <button>TOP</button>
        </div>
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
        </div>
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
        </div>
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
        </div>
      </div>
      {/* Repeat similar sections for other parameters */}
      <div className="machine-mode">
        <button>AUTO</button>
      </div>
      {/* Add other sections/buttons as needed */}
    </div>
  );
};

export default WebControls;
