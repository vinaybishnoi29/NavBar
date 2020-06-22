import React from 'react';
import './GridTest.scss';
 
const GridTest: React.FC = () => {
    const bootGrid =  (
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

    return (
      <>
      <div className="grid">
        <div className="col-lg-12 col-md-4 col-sm-2">
          <div className="g-c" style={{background:"#8FECF2"}}>A</div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-2">
          <div className="g-c" style={{background:"#CCF28F"}}>B</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4">
          <div className="g-c" style={{background:"#FF6464"}}>C</div>
        </div>
        <div className="col-lg-2 col-sm-2">
          <div className="g-c" style={{background:"#2D42FF"}}>D</div>
        </div>
        <div className="col-lg-3 col-sm-2">
          <div className="g-c" style={{background:"#F2E88F"}}>E</div>
        </div>
        <div className="col-lg-1 col-sm-2">
          <div className="g-c" style={{background:"#FF93C7"}}>F</div>
        </div>
        <div className="col-lg-4 col-lg-shift-1 col-md-shift-0 col-md-6 col-sm-2">
          <div className="g-c" style={{background:"#F9F7C5"}}>G</div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="g-c" style={{background:"#4D4D4D"}}>H</div>
        </div>
        <div className="col-lg-2 col-sm-1">
          <div className="g-c" style={{background:"#4FFFD5"}}>I</div>
        </div>
        <div className="col-lg-1 col-sm-1">
          <div className="g-c" style={{background:"#FF93C7"}}>J</div>
        </div>
        <div className="col-lg-1 col-sm-3">
          <div className="g-c" style={{background:"#93EBFF"}}>K</div>
        </div>
        <div className="col-lg-1 col-sm-1">
          <div className="g-c" style={{background:"#FF6464"}}>L</div>
        </div>
        <div className="col-lg-2 col-sm-1">
          <div className="g-c" style={{background:"#FFE81A"}}>M</div>
        </div>
        <div className="col-lg-2 col-lg-shift-1 col-md-shift-0 col-md-1 col-sm-1">
          <div className="g-c" style={{background:"#D0C5F9"}}>N</div>
        </div>
        <div className="col-lg-1 col-md-7 col-sm-1">
          <div className="g-c" style={{background:"#F9F7C5"}}>O</div>
        </div>
        <div className="col-lg-3 col-md-5 col-sm-4">
          <div className="g-c" style={{background:"#000"}}>P</div>
        </div>
      </div>
      <div className="grid-fluid">
        <div className="col-lg-12 col-md-4 col-sm-2">
          <div className="g-c" style={{background:"#8FECF2"}}>A</div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-2">
          <div className="g-c" style={{background:"#CCF28F"}}>B</div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4">
          <div className="g-c" style={{background:"#FF6464"}}>C</div>
        </div>
      </div>
      </>
    );
};

export default GridTest;