import React from 'react';
import logo from './logo.svg';
import './App.css';
// function App() {
//   var fullName = 'Le Huy Hiep'
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>My name is {fullName}</h1>
//         <p>This is my first app</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  // eslint-disable-next-line react/require-render-return
  render() {
    var fullName = 'Le Huy Hiep'
    return (
      <div className="App">
        <header className="App-header">
          <h1>My name is {fullName}</h1>
          <p>This is my first app</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
        </header>
      </div>
    );
  }
}


export default App;
