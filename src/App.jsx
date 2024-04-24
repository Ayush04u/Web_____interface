import React from 'react';
import image from './assets/image.png';
import image1 from './assets/image1.png';



// import './WebControls.css'; // Import your CSS file

const WebControls = () => {
  return (
    <div className="web-controls-container">
      <div className="logo">WEB CONTROL
      </div>
      <div className="section">
        <div className="section-row">
          <span>PARAMETER</span>
          <span>SET</span>
          <span>ACT</span>
          <span>DIA</span>
          <span>E2P Act Pressure</span>
          <span>DIRECTION</span>
        </div>
      </div>
      <div className="parameter">
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" style={{ backgroundColor: "blue" }} />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <button style={{ backgroundColor: "yellow" }}>TOP</button>
        </div>
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <input type="text" placeholder="####" />
          <button style={{ backgroundColor: "yellow" }}>TOP</button>
        </div>
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" style={{ backgroundColor: "blue" }} />
          <span>ACT MTR</span>
          <input type="text" placeholder="####" />
          <button style={{ backgroundColor: "RED" }}>RESET</button>
        </div>
        <div className="parameter-row">
          <label>UW TEN.(N)</label>
          <input type="text" placeholder="####" style={{ backgroundColor: "blue" }} />
          <span>TOTAL MTR</span>
          <input type="text" placeholder="####" />
          <button style={{ backgroundColor: "RED" }}>RESET</button>
        </div>
      </div>
      {/* Repeat similar sections for other parameters */}
      <div className="Footer">
        <div className="box-row">
          <div className="box">
            <img src={image} alt="" />
          </div>
          <div className="box">
            <img src={image1} alt="" />
          </div>
          <div className="box">INDEX</div>
          <div className="box">DRIVE INCH</div>
          <div className="box">AUX.CONTROL</div>
          <div className="box">MOTOR</div>
        </div>
      </div>
    </div>
  );
};

export default WebControls;
