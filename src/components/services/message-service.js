import config from '../../config'

const MessageService = {
  getMessageBoard() {
    return fetch(`${config.API_ENDPOINT}/message-board`, {
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
  },
  getMessage(messageId) {
    return fetch(`${config.API_ENDPOINT}/message-board/${messageId}`, {
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
  }

}

export default MessageService