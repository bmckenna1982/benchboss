import React, { Component } from 'react'
import { format as formatDate, parseISO } from 'date-fns'
import { NiceDate } from '../../utils/utils'
import './styles/comment.css'

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