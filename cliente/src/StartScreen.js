import React, { Component } from 'react';
import './App.css';
import Comp2 from './Comp2';
import btn_icon_649997 from './images/btn_icon_649997.png';
import btn_icon_974232 from './images/btn_icon_974232.png';
import btn_icon_286343 from './images/btn_icon_286343.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      elEditor149664_visible: true,
      mail: '',
      name: '',
      field2: '',
    };
  }

  onClick_elFab649997 = (ev) => {
    this.setState({elEditor149664_visible: !this.state.elEditor149664_visible});
  
  
  }
  
  
  textInputChanged_mail = (event) => {
    this.setState({mail: event.target.value});
  }
  
  onClick_elOk974232 = (ev) => {
  
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
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f4f4f4',
        pointerEvents: 'none',
     };
    const style_alumno = {
        background: 'rgba(94, 94, 94, 1.000)',
        pointerEvents: 'none',
     };
    const style_textBlock = {
        fontSize: 21.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#feffff',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_nombre = {
        fontSize: 21.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#feffff',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_rectangle = {
        background: 'rgba(121, 121, 121, 1.000)',
        pointerEvents: 'none',
     };
    const style_fab = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
     };
    const style_editor = {
        background: 'rgba(213, 213, 213, 1.000)',
        pointerEvents: 'none',
     };
    const elEditor149664 = this.state.elEditor149664_visible ? (
        <div className='elEditor149664' style={style_editor} />
     ) : null;
    const style_mail = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    const style_ok = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
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
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    const style_field2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
     };
    
    return (
      <Container fluid={true} className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground242644' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='hasNestedComps elHeader986125'>
            <Comp2 appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elAlumno954937' style={style_alumno} />
            <div className='elTextBlock693388' style={style_textBlock}>
              <div>{this.props.locStrings.start_textblock_693388}</div>
            </div>
            <div className='elNombre117397' style={style_nombre}>
              <div>{this.props.locStrings.start_text2_271105}</div>
            </div>
            <div className='elRectangle168673' style={style_rectangle} />
            <Button className='actionFont elFab649997' style={style_fab}  variant="fab" color="accent" onClick={this.onClick_elFab649997} >
              <img src={btn_icon_649997} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            { elEditor149664 }
            <input className='elMail338775' style={style_mail} type="email" placeholder={this.props.locStrings.start_mail_338775} onChange={this.textInputChanged_mail} defaultValue={this.state.mail}  />
            <Button className='actionFont elOk974232' style={style_ok}  variant="fab" color="accent" onClick={this.onClick_elOk974232} >
              <img src={btn_icon_974232} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            <Button className='actionFont elEdit286343' style={style_edit}  variant="fab" color="accent" >
              <img src={btn_icon_286343} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
            <input className='elName646329' style={style_name} type="text" placeholder={this.props.locStrings.start_name_646329} onChange={this.textInputChanged_name} defaultValue={this.state.name}  />
            <input className='elField2685054' style={style_field2} type="text" placeholder={this.props.locStrings.start_field2_685054} onChange={this.textInputChanged_field2} defaultValue={this.state.field2}  />
          </div>
        </div>
      </Container>
    )
  }
  

}
