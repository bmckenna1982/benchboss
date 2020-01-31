import React, { Component } from 'react'
import { NiceDate } from '../../utils/utils'
import './comment.css'

class Comment extends Component {
  render() {

    return (
      <div className='Comment_container'>
        <div className='Comment'>{this.props.comment.content}</div>
        <div className='Comment_author'>{this.props.comment.author}</div>
        <div className='Comment_date'>
          <NiceDate date={this.props.comment.postedDate} />
        </div>
      </div>
    )
  }
}

export default Comment