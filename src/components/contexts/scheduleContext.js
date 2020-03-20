import React from 'react';

const ScheduleContext = React.createContext({
  schedule: [],
  game: {
    time: ''
  },
  rsvp: [
    {
      user: {
        full_name: ''
      }
    }
  ],
  userRsvp: {
    game_status: ''
  },
  user: {
    id: null
  },
  error: {},
  updateRsvp: () => { },
  addToRsvp: () => { }
});

export default ScheduleContext;
