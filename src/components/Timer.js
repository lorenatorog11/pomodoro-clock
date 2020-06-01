import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faSync} from '@fortawesome/free-solid-svg-icons';

class Timer extends Component{
    render(){
        let {click, name, min, seg} = this.props;

        return(
            <div>
                <section>
                    <h1 id="timer-label">{name}</h1>
                    <div id="time-left">{min}:{seg}</div>
                </section>
                <section>
                    <button id="start_stop" onClick={click}><FontAwesomeIcon icon = {faPlay} /></button>
                    <button id="reset" ><FontAwesomeIcon icon={faSync}/></button>
                </section>
            </div>
        )
    }
}

export default Timer;