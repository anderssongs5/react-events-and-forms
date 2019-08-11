import React, {Component} from 'react';
import Forms from './sections/forms'

class App extends Component {
  constructor() {
    super();
    this.state = {mouseX: 0, mouseY: 0};
    //this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h4>Events</h4>
        <button onClick={this.handleClick}>Hi there</button>
        <div style={{border: '1px solid #000', marginTop: 10, padding: 10}} onMouseMove={this.handleMouseMove}>
          <p>{this.state.mouseX} - {this.state.mouseY}</p>
        </div>
        <br/><br/>

        <Forms />
      </div>
    );
  }
}

export default App;
