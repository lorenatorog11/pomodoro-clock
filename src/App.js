import React, {Component} from 'react';
import './App.css';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      break: 5,
      session: 25,
      timer: 25,
      isPlay: false
    }
    this.decrementkBreak = this.decrementkBreak.bind(this)
    this.decrementkSession = this.decrementkSession.bind(this)
    this.incrementkBreak = this.incrementkBreak.bind(this)
    this.incrementkSession = this.incrementkSession.bind(this)
    this.timerDecrement = this.timerDecrement.bind(this)
    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  decrementkBreak(){
    let contadorBreak =this.state.break;
    if(contadorBreak>1){
      contadorBreak--
      this.setState({
        break: contadorBreak
      })
    }
  }

  decrementkSession(){
    let contadorSession =this.state.session;
    if(contadorSession>1){
      contadorSession--
      this.setState({
        session: contadorSession,
        timer: contadorSession
      })
    }
  }

  incrementkBreak(){
    let contadorBreak =this.state.break;
    if(contadorBreak<60){
      contadorBreak++
      this.setState({
        break: contadorBreak
      })
    }
  }

  incrementkSession(){
    console.log(this.state);
    let contadorSession =this.state.session;
    if(contadorSession<60){
      contadorSession++
      this.setState({
        session: contadorSession,
        timer: contadorSession
      })
    }
  }


  timerDecrement(){
    this.setState((prevState)=>{
      return{
        timer: prevState.timer - 1
      }
    })
  } 

  onToggleInterval(inSession){
    if(inSession){
      this.setState({
        timer: this.state.session
      })
    }else{
      this.setState({
        timer: this.state.break
      })
    }
  }

  onRefresh(){
    this.setState({
      break: 5,
      session: 25,
      timer: 25,
      isPlay: false
    })
  }

  onPlay = (isPlay) =>{
    this.setState({
      isPlay: isPlay
    })
  }

  render(){
    return (
      <div className="App" id="App">
        <h1 id="title">Promodoro Clock</h1>
        <section id="section">
          <BreakLength break={this.state.break} isPlay={this.state.isPlay} decrement={this.decrementkBreak} increment={this.incrementkBreak}/>
          <SessionLength session={this.state.session} isPlay={this.state.isPlay} decrement={this.decrementkSession} increment={this.incrementkSession}/>
        </section>
        <section id="section2">
          <Timer timer={this.state.timer} break={this.state.break} decrement={this.timerDecrement} toggle={this.onToggleInterval} refresh={this.onRefresh} onPlay={this.onPlay}/>
        </section>
        
      </div>
    );
  }
}

export default App;
