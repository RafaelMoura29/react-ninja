'use strict'

import React from 'react'

const Title = ({name, lastName}) =>{
  return <h1>Hello {name + ' ' + lastName} </h1>
}

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'sem sobrenome'
}

export default Title
