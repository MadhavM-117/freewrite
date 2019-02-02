import * as React from 'react';
import './App.css';

import ControlButtons from '../ControlButtons';
import DrawingCanvas from '../DrawingCanvas';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DrawingCanvas /><ControlButtons />
      </div>
    );
  }
}

export default App;
