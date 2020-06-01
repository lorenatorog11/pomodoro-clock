import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'

class BreakLength extends Component{
    render(){
        return(
            <div>
                <div>
                    <h1 id="break-label">Break Length</h1>
                </div>
                <div id="break">
                    <button className="timer" id="break-decrement" onClick={this.props.decrement}><FontAwesomeIcon icon ={faArrowDown} /></button>
                    <p className="timer" id="break-length">{this.props.break}</p>
                    <button className="timer" id="break-increment" onClick={this.props.increment}><FontAwesomeIcon icon ={faArrowUp}/></button>
                </div>                
            </div>
        )
    }
}

export default BreakLength;