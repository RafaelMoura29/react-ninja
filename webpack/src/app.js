'use strict'

import React, { Component } from 'react'
import Button from './Button'
import LikeButton from './Like-button'
import SearchButton from './Search-button'


class App extends Component {
  render() {
    return (
      <div className='container'>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
