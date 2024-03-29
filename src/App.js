import React from 'react';
import './App.css';
import Button from './components/button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button buttonApi={this.state}/>
        </header>
      </div>
    );
  }
}

export default App;
