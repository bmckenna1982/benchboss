import React, { Component } from 'react'

class AddComment extends Component {
  
  render() {
    return(
      <div className="AddComment">
        <h2>Add a Comment</h2>
        {/* <ValidationError message={this.validateName()} /> */}
        <form className='AddComment_form' onSubmit={this.handleSubmit}>          
          <div className='form-group'>
            <label htmlFor='commentContent'>New comment content: </label>
            <textarea name='commentContent' id='commentContent' rows='6' cols='45' required onChange={e => this.updateValue(e.target.value)}></textarea>            
          </div>
          <button
            type='submit'
            className='AddComment_form__submit'            
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AddComment