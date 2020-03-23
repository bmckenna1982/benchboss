import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GameDetail from '../src/components/gameDetail/gameDetail'

describe('gameDetail', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <GameDetail />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

})