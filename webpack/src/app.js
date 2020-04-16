'use strict'

import React, { Component } from 'react'
import Button from './Button'
import Square from './Square'

class App extends Component {

  constructor() {
    console.log('Constructor')
    super()
    this.state = {
    }
  }


  render() {
    return (
      <div>
       <Button >
         Clique em mim
       </Button>
      </div>
    )
  }
}

export default App
