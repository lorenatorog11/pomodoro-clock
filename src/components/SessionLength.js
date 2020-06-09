import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'

class SessionLength extends Component{
    render(){
        return(
            <div>
                <div>
                    <h2 id="session-label">Session Length</h2>
                </div>
                <div id="session" >
                    <button className="timer" id="session-decrement" disabled={this.props.isPlay === true? "disabled": ""} onClick={this.props.decrement}><FontAwesomeIcon icon ={faArrowDown}/></button>
                    <p  className="timer" id="session-length">{this.props.session}</p>
                    <button className="timer" disabled={this.props.isPlay === true? "disabled": ""} id="session-increment" onClick={this.props.increment}><FontAwesomeIcon icon ={faArrowUp}/></button>
                </div>                
            </div>
        )
    }
}

export default SessionLength;