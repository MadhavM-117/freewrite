import * as React from 'react';
import './App.css';

import DrawingCanvas from '../DrawingCanvas';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DrawingCanvas />
      </div>
    );
  }
}

export default App;
