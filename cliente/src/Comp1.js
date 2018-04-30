import React, { Component } from 'react';
import './App.css';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_editor = {
        background: 'rgba(234, 234, 234, 1.000)',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="compContent">
          <div className='containerMinHeight elEditor741823' style={style_editor} />
        </div>
      </div>
    )
  }
  

}
