import React, { Component } from 'react'
import { format as formatDate, parseISO } from 'date-fns'
import './styles/comment.css'

class Comment extends Component {
  NiceDate({ postedDate, format = 'MMMM do yyyy h:mm a' }) {
    const parseDate = parseISO(postedDate)    
    
    console.log('postedDate', postedDate)
    console.log('Date', formatDate(parseDate, format))
    return formatDate(parseDate, format)
  }

  render() {
    console.log(this.props)
    return(
      <div className='Comment_container'>
        <div className='Comment'>{this.props.comment.content}</div>
        <div className='Comment_author'>{this.props.comment.author}</div>
        <div className='Comment_date'>{this.NiceDate(this.props.comment)}</div>
      </div>
    )
  }
}

export default Comment