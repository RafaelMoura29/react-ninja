'use strict'

import React from 'react'
import Button from './Button'

const SearchButton = () => {
    return(
        <Button handleClick={() => { alert("search")}}>
            Search
        </Button>
    )
}

export default SearchButton