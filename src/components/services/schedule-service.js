import config from '../../config'
import TokenService from './token-service'

const ScheduleService = {
  getSchedule() {
    return fetch(`${config.API_ENDPOINT}/schedule`, {
      headers: {
        // Authorization: `Bearer ${config.API_KEY}`        
      },
      method: 'GET',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    // .then(data => {
    //   console.log('data', data)
    //   this.setState({
    //     schedule: [
    //       ...data
    //     ]
    //   })
    // })
    // .catch(err => {
    //   this.setState({
    //     error: 'Sorry, could not get the schedule at this time'
    //   })
    // })
  },
  getGame(gameId) {
    return fetch(`${config.API_ENDPOINT}/schedule/${gameId}`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getRsvp(gameId) {
    return fetch(`${config.API_ENDPOINT}/schedule/${gameId}/rsvp`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
}

export default ScheduleService