import TokenService from './token-service'
import config from '../../config'

const RsvpService = {

  postRsvp(rsvp) {
    return fetch(`${config.API_ENDPOINT}/rsvp`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(rsvp)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  updateRsvp(newRsvp) {
    const rsvp_id = newRsvp.id
    return fetch(`${config.API_ENDPOINT}/rsvp/${rsvp_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRsvp)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default RsvpService