import React, { Component } from 'react';
import Titulo from "./titulo.js";

class Plantilla extends Component {
    render() {
        return (
            <div>
              <Titulo texto="InnovaDocs"/>
              {
                  this.props.children
                      ? this.props.children
                      : null
              }
            </div>
        );
    }
}

export default Plantilla;
