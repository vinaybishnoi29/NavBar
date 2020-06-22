import React from 'react';
import './GridBootTest.scss';
 
const GridBootTest: React.FC = () => {
    return (
        <div className="container-fluid">
        <h1>Basic Grid Structure</h1>
        <p>Resize the browser window to see the effect.</p>
        <p>The first, second and third row will automatically stack on top of each other when the screen is less than 576px wide.</p>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6" style={{backgroundColor:"yellow"}}>25%</div>
            <div className="col-sm-6" style={{backgroundColor:"orange"}}>25%</div>
          </div>
          <br/>
          <div className="row">
            <div className="col-sm-4" style={{backgroundColor:"yellow"}}>25%</div>
            <div className="col-sm-4" style={{backgroundColor:"orange"}}>25%</div>
            <div className="col-sm-4" style={{backgroundColor:"yellow"}}>25%</div>
          </div>
          <br/>
          <div className="row">
            <div className="col-sm" style={{backgroundColor:"yellow"}}>25%</div>
            <div className="col-sm" style={{backgroundColor:"orange"}}>25%</div>
            <div className="col-sm" style={{backgroundColor:"yellow"}}>25%</div>
            <div className="col-sm" style={{backgroundColor:"orange"}}>25%</div>
          </div>
          <br/>
          <div className="row">
            <div className="col" style={{backgroundColor:"yellow"}}>25%</div>
            <div className="col" style={{backgroundColor:"orange"}}>25%</div>
            <div className="col" style={{backgroundColor:"yellow"}}>25%</div>
            <div className="col" style={{backgroundColor:"orange"}}>25%</div>
          </div>
        </div>
      </div>
    );
}

export default GridBootTest;