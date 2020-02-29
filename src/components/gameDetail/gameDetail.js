import React, { Component } from "react";
import { NiceMonth, NiceDay, NiceTime } from "../../utils/utils";
import ScheduleService from "../services/schedule-service";
import RSVP from "../rsvp/rsvp";
import ScheduleContext from "../contexts/scheduleContext";
import "./gameDetail.css";

class GameDetail extends Component {
  static defaultProps = {};

  state = {
    game: {
      time: "2020-02-19T10:54:00.000Z"
    },
    rsvp: [
      {
        user: {
          full_name: ""
        }
      }
    ],
    userRsvp: {
      game_status: ""
    },
    user: {},
    error: null
  };

  static contextType = ScheduleContext;

  addToRsvp = newRsvp => {
    this.setState({
      rsvp: [...this.state.rsvp, newRsvp],
      userRsvp: newRsvp
    })
  };

  updateRsvp = newRsvp => {

    const newRsvpArray = this.state.rsvp.map(r =>
      r.id === newRsvp.id
        ? { ...r, game_status: newRsvp.game_status }
        : r
    )

    this.setState({
      rsvp: newRsvpArray,
      userRsvp: newRsvp
    })
  }

  componentDidMount() {
    const { gameId } = this.props.match.params;
    ScheduleService.getGame(gameId)
      .then(res => {
        ScheduleService.getRsvp(res.game.id).then(gameRsvp => {
          this.setState({
            rsvp: gameRsvp.teamRsvp,
            userRsvp: gameRsvp.userRsvp[0],
            game: res.game,
            user: res.user
          });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const contextValue = {
      game: this.state.game,
      rsvp: this.state.rsvp,
      userRsvp: this.state.userRsvp,
      addToRsvp: this.addToRsvp,
      updateRsvp: this.updateRsvp,
      user: this.state.user
    };

    const selectedGame = this.state.game;

    // const currentUserRsvp = this.state.userRsvp
    //   ? this.state.userRsvp
    //   : "pending";

    return (
      <ScheduleContext.Provider value={contextValue}>
        <section className="GameDetail">
          <h2>{selectedGame.summary}</h2>
          <div className="GameDetail_Date">
            <div className="month">
              <NiceMonth date={selectedGame.time} />
            </div>
            <div className="day">
              <NiceDay date={selectedGame.time} />
            </div>
            <div className="GamePreview_time">
              <NiceTime date={selectedGame.time} />
            </div>
            <div className="GamePreview_location">{selectedGame.location}</div>
            <RSVP />
          </div>
        </section>
      </ScheduleContext.Provider>
    );
  }
}

export default GameDetail;
