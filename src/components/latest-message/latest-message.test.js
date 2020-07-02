import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LatestMessage from './latest-message'

describe('LatestMessage', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <LatestMessage />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})