import config from '../../config'

const ScheduleService = {
  getSchedule() {
    return fetch(`${config.API_ENDPOINT}/schedule`, {
      headers: {
        Authorization: `Bearer ${config.API_KEY}`        
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
  }
}

export default ScheduleService