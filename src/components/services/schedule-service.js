import config from '../../config'
import TokenService from './token-service'

const ScheduleService = {
  getSchedule() {
    return fetch(`${config.API_ENDPOINT}/schedule`, {
      headers: {
      },
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
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