import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Schedule from './schedule'

describe('Schedule', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Schedule />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})