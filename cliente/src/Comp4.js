import React, { Component } from 'react';
import './App.css';
import btn_icon_59224 from './images/btn_icon_59224.png';
import btn_icon_272070 from './images/btn_icon_272070.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class Comp4 extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      mail: '',
      name: '',
      field2: '',
    };
  }

  textInputChanged_mail = (event) => {
    this.setState({mail: event.target.value});
  }
  
  textInputChanged_name = (event) => {
    this.setState({name: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_editor = {
        background: 'rgba(234, 234, 234, 1.000)',
        pointerEvents: 'none',
     };
    const style_mail = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 25.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    const style_ok = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_edit = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_name = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 25.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    const style_field2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 25.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    
    return (
      <div className="Comp4" style={baseStyle}>
        <div className="compContent">
          <div className='containerMinHeight elEditor666800' style={style_editor} />
          <input className='elMail304331' style={style_mail} type="email" placeholder={this.props.locStrings.comp4_mail_304331} onChange={this.textInputChanged_mail} defaultValue={this.state.mail}  />
          <Button className='actionFont elOk59224' style={style_ok}  variant="fab" color="accent" >
            <img src={btn_icon_59224} alt="" style={{width: '100%', marginTop: '4%'}} />
          </Button>
          <Button className='actionFont elEdit272070' style={style_edit}  variant="fab" color="accent" >
            <img src={btn_icon_272070} alt="" style={{width: '100%', marginTop: '4%'}} />
          </Button>
          <input className='elName579982' style={style_name} type="text" placeholder={this.props.locStrings.comp4_name_579982} onChange={this.textInputChanged_name} defaultValue={this.state.name}  />
          <input className='elField21030425' style={style_field2} type="text" placeholder={this.props.locStrings.comp4_field2_1030425} onChange={this.textInputChanged_field2} defaultValue={this.state.field2}  />
        </div>
      </div>
    )
  }
  

}
