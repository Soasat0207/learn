import React ,{Fragment,Component} from 'react';
import './App.css';
import Clock from './components/Clock'
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      time:new Date().toString(),
    }
    this.process = null
  }
  start = () => {
    this.process = setInterval(()=>{
      this.setState({
        time:new Date().toString()
      })
    },1000)
    
  }
  end = () => {
    clearInterval(this.process)
  }
  render() {
    return (
      <Fragment>
        <Clock time={this.state.time}/>
        <button onClick={this.start}>Start</button>
        <button onClick={this.end}>End</button>
      </Fragment>
    )
  }
}
export default App;
