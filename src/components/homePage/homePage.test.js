import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import HomePage from './homePage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders the UI as expected', () => {
  const ul = shallow(<HomePage />)
    .find('ul')
  expect(toJson(ul)).toMatchSnapshot()
});
