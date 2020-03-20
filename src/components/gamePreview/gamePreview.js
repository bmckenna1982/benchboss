import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NiceMonth, NiceDay, NiceTime } from '../../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import './gamePreview.css';

class GamePreview extends Component {
  render() {
    return (
      <div className='GamePreview_container raised'>
        <Link to={`/schedule/${this.props.game.id}`}>
          <div className='GamePreview_date'>
            <div className='month'>
              <NiceMonth date={this.props.game.time} />
            </div>
            <div className='day'>
              <NiceDay date={this.props.game.time} />
            </div>
          </div>
          <div className='GamePreview_info'>
            <div className='GamePreview_opponent'>
              {this.props.game.summary}
            </div>
            <div className='GamePreview_time'>
              <NiceTime date={this.props.game.time} />
            </div>
            <div className='GamePreview_location'>
              {this.props.game.location}
            </div>
          </div>
          <div className='GamePreview_icon'>
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </Link>
      </div>
    );
  }
}

export default GamePreview;
