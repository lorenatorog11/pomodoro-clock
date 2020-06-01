import React, {Component} from 'react';
import './App.css';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';


let segundos= '00';
let minutos = '00';
let stateName = "Session";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      break: 5,
      session: 25,
      timer: 25,
      name: "Session"
    }
    this.decrementkBreak = this.decrementkBreak.bind(this)
    this.decrementkSession = this.decrementkSession.bind(this)
    this.incrementkBreak = this.incrementkBreak.bind(this)
    this.incrementkSession = this.incrementkSession.bind(this)
    this.timerIncrement = this.timerIncrement.bind(this)
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
        session: contadorSession
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
    let contadorSession =this.state.session;
    if(contadorSession<60){
      contadorSession++
      this.setState({
        session: contadorSession
      })
    }
  }

  timerIncrement(){
    segundos = 60;
    stateName = this.state.session; 
    minutos = this.state.session;     
    if(stateName === "Session" ){
       
      setInterval(()=>{
        if(segundos>0){
          segundos--;
          console.log(minutos,':',segundos);
          if(segundos === 0 && minutos !== 0){
            minutos--;
            segundos = 60;          
          }else if(segundos ===0 && minutos ===0){
            stateName = "Break";
            this.setState({
              name: "Break"
            })         
          }
        }
      }, 100)
    }
    segundos = 60;
    minutos = this.state.break;  
    if(stateName === "Break"){ 
      setInterval(()=>{
        if(segundos>0){
          segundos--;
          console.log("HolsBreak",minutos,':',segundos);
          if(segundos === 0 && minutos !== 0){
            minutos--;
            segundos = 60;          
          }else if(segundos ===0 && minutos ===0){
            this.setState({
              name: "Session"
            })
            stateName = "Session";
        }
        }
      }, 100)
    }
  }


  render(){
    return (
      <div className="App" id="App">
        <h1 id="title">Promodoro Clock</h1>
        <section id="section">
          <BreakLength break={this.state.break} decrement={this.decrementkBreak} increment={this.incrementkBreak}/>
          <SessionLength session={this.state.session} decrement={this.decrementkSession} increment={this.incrementkSession}/>
        </section>
        <Timer click={this.timerIncrement} min={minutos} seg={segundos} name={this.state.name}/>
      </div>
    );
  }
}

export default App;
