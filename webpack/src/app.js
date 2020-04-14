'use strict'

import React, { Component } from 'react'
import Button from './Button'
import Square from './Square'

class App extends Component {

  constructor() {
    super()
    this.state = {
      color: 'green'
    }
  }

  render() {
    return (
      <div className='container' >
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map((color) => {
          return (<Button
            key={color}
            handleClick={() => this.setState({ color })}
          >{color}
          </Button>)
        })}
      </div>
    )
  }
}

export default App
