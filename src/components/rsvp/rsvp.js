import React, { Component } from "react";
import RsvpService from "../services/rsvp-service";
import ScheduleContext from "../contexts/scheduleContext";

class RSVP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rsvp: [],
      userRsvp: {
        game_status: ""
      }
    };
  }

  static contextType = ScheduleContext;

  handleClick = e => {
    e.preventDefault();
    this.setState({
      error: null
    });

    // const userStatus = e.target.value;

    const newRsvp = {
      // id: this.context.userRsvp.id,
      game_id: this.context.game.id,
      game_status: e.target.value,
      user: this.context.user
    };

    if (!this.context.userRsvp) {
      RsvpService.postRsvp(newRsvp)
        .then(res => {
          this.context.addToRsvp(res)
        })
        .catch(this.setState({ error: "error" }));
    } else {
      newRsvp.id = this.context.userRsvp.id
      console.log('update')
      RsvpService.updateRsvp(newRsvp).then(res => {
        this.context.updateRsvp(res.numRowsAffected)
      });
    }
  };

  render() {
    const rsvpIn = this.context.rsvp.filter(
      status => status.game_status === "in"
    );
    const rsvpMaybe = this.context.rsvp.filter(
      status => status.game_status === "maybe"
    );
    const rsvpOut = this.context.rsvp.filter(
      status => status.game_status === "out"
    );

    const currentlyChecked = this.context.userRsvp
      ? this.context.userRsvp.game_status
      : null

    const rsvpLegend =
      (!this.context.userRsvp)
        ? "Please set your RSVP"
        : `Your current RSVP status is '${this.context.userRsvp.game_status}'`;

    return (
      <div className="RSVP">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>{rsvpLegend}</legend>
            <div className="RSVP_selection_container">
              <input
                onChange={this.handleClick}
                checked={currentlyChecked === "in"}
                type="radio"
                id="radioIn"
                name="rsvp_status"
                value="in"
              ></input>
              <label htmlFor="radioIn">In</label>
              <input
                onChange={this.handleClick}
                checked={currentlyChecked === "maybe"}
                type="radio"
                id="radioMaybe"
                name="rsvp_status"
                value="maybe"
              ></input>
              <label htmlFor="radioMaybe">Maybe</label>
              <input
                onChange={this.handleClick}
                checked={currentlyChecked === "out"}
                type="radio"
                id="radioOut"
                name="rsvp_status"
                value="out"
              ></input>
              <label htmlFor="radioOut">Out</label>
            </div>
          </fieldset>
        </form>
        <div className="RSVP_status">
          <div className="RSVP_status_in">
            <h4>Replied In</h4>
            <ul className="RSVP_in_list">
              {rsvpIn.map(s => {
                if (s) {
                  console.log('s', s)
                  return <li key={s.user.id}>{s.user.full_name}</li>;
                }
                return ''
              })}
            </ul>
          </div>
        </div>
        <div className="RSVP_status_maybe">
          <h4>Replied Maybe</h4>
          <ul className="RSVP_maybe_list">
            {rsvpMaybe.map(s => {
              if (s) {
                console.log('s', s)
                return <li key={s.user.id}>{s.user.full_name}</li>;
              }
              return ''
            })}
          </ul>
        </div>
        <div className="RSVP_status_out">
          <h4>Replied Out</h4>
          <ul className="RSVP_out_list">
            {rsvpOut.map(s => {
              return <li key={s.user.id}>{s.user.full_name}</li>;
            })}
          </ul>
        </div>
        {/* <div className='RSVP_status_pending'>
          <h4>Pending Reply</h4>
          <ul className='RSVP_pending_list'>
            <li>Keith Jones</li>
            <li>Stephen Patch</li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default RSVP;
