'use strict'

import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Button>
          <span>Texto span</span>
          testo fora span
        </Button>
      </div>
    )
  }
}

export default App
