import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faStop,faSync} from '@fortawesome/free-solid-svg-icons';

class Timer extends Component{
    constructor(){
        super()

        this.state ={
            inSession : true,
            timerSecond: 0,
            intervalId:0
        }
    }

    play =()=>{
        let intervalId = setInterval(this.decreaseTimer,100);
        this.props.onPlay(true);
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer = () =>{
        switch(this.state.timerSecond){
            case 0:
                if(this.props.timer === 0){
                    if(this.state.inSession){
                        this.setState({
                            inSession: false
                        });
                        this.props.toggle(this.state.inSession);
                    }else {
                        this.setState({
                            inSession: true
                        });
                        this.props.toggle(this.state.inSession);
                    }
                }else{
                    this.props.decrement()
                    this.setState({
                    timerSecond: 59
                    })
                }                
                break;
            default:
                this.setState((prevState)=>{
                    return {timerSecond: prevState.timerSecond -1
                    }
                })
                break;
        }
    }

    stop = ()=>{
        clearInterval(this.state.intervalId);
        this.props.onPlay(false);
    }

    refresh = ()=>{
        this.stop();
        this.props.refresh();
        this.props.onPlay(false);
        this.setState({
            timerSecond:0,
            inSession: true
        })
    }



    render(){
        return(
            <div>
                <section>
                    <h1 id="timer-label">{this.state.inSession === true? "Session":"Break"}</h1>
                    <div id="time-left">
                        <div>{this.props.timer}</div>
                        <div>:</div>
                        <div>
                            {this.state.timerSecond === 0 ? "00": this.state.timerSecond <10 ? "0" + this.state.timerSecond : this.state.timerSecond}
                        </div>
                    </div>
                </section>
                <section>
                    <button id="start"  onClick={this.play}><FontAwesomeIcon icon = {faPlay} /></button>
                    <button id="stop" onClick={this.stop}><FontAwesomeIcon icon = {faStop} /></button>
                    <button id="reset" onClick={this.refresh}><FontAwesomeIcon icon={faSync}/></button>
                </section>
            </div>
        )
    }
}

export default Timer;