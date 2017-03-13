import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import rawStyles from '../data/styles.json'

console.log(rawStyles.styles[0].id)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
