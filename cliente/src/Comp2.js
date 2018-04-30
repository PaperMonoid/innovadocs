import React, { Component } from 'react';
import './App.css';


export default class Comp2 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_rectangle = {
        background: 'rgba(0, 0, 0, 1.000)',
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 25.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#feffff',
        textAlign: 'center',
        textShadow: '#feffff -1.4px 0.7px 4.5px',
        pointerEvents: 'none',
     };
    
    return (
      <div className="Comp2" style={baseStyle}>
        <div className="compContent">
          <div className='elRectangle773072' style={style_rectangle} />
          <div className='elText228206' style={style_text}>
            <div>{this.props.locStrings.comp2_text_228206}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
