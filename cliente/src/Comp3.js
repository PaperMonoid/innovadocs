import React, { Component } from 'react';
import './App.css';
import btn_icon_687174 from './images/btn_icon_687174.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Comp3 extends Component {

  // This component doesn't use any properties

  onClick_elFab687174 = (ev) => {
  
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_menu = {
        background: 'rgba(121, 121, 121, 1.000)',
        pointerEvents: 'none',
     };
    const style_fab = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
     };
    
    return (
      <div className="Comp3" style={baseStyle}>
        <div className="compContent">
          <div className='elMenu47625' style={style_menu} />
          <Button className='actionFont elFab687174' style={style_fab}  variant="fab" color="accent" onClick={this.onClick_elFab687174} >
            <img src={btn_icon_687174} alt="" style={{width: '100%', marginTop: '4%'}} />
          </Button>
        </div>
      </div>
    )
  }
  

}
