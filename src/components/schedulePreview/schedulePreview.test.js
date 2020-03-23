import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SchedulePreview from './schedulePreview'

describe('SchedulePreview', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <SchedulePreview />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})