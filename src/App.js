import React, {Component} from 'react';

class Counter extends Component {

  constructor () {

    super();

    this.state = {

      counter: 0,

      double: false,

    }

  }

increment = () => {

  if(this.state.counter < 20) {

    this.setState({

      counter: this.state.counter + 1

    })

  }

  if(this.state.double){

    if(this.state.counter < 19){

      this.setState({

        counter: this.state.counter + 2

      })

    }

  }

};

decrement = () => {

  if(this.state.counter > 0) {

    this.setState({

      counter: this.state.counter -1,

    })

  }

  if(this.state.double) {

    if(this.state.counter > 1) {

      this.setState({

        counter: this.state.counter -2

      })

    }

  }

}
clear = () => {

  this.setState({

    counter: 0,

  })

}
double = () => {

  if(this.state.double) {

    this.setState({

      double: false,

    })

  } else {

    this.setState({

      double: true

    })

  }

}

  render() {

    console.log("This is line 13 representating state", this.state.counter);

    console.log("This is the double value", this.state.double);

    return(

      <div className="container">

        <div className="navbar">Counter.js</div>

        <div className="counter">

          <h1>{this.state.counter}</h1>

          <button type="button" onClick={this.clear}>Clear Count</button>

          <button type="button" onClick={this.increment}>Increment</button>

          <button type="button" onClick={this.decrement}>Decrement</button>

          <button type="button" onClick={this.double}>{this.state.double ? 'Double Count' : "Single Count"}</button>

        </div>

      </div>

    )

  }

}
export default Counter;
