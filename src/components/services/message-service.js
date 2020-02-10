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
      .then((data) => {
        console.log('data', data)
        return fetch(`${config.API_ENDPOINT}/message-board/${data.id}/comments`, {
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
          .then(com => {
            return {
              message: data,
              comments: com
            }
          }) 
      })
      .then(comres => {
        console.log('comres', comres)
        return comres
      })
  },

  getLatestMessage() {
    return fetch(`${config.API_ENDPOINT}/latest-message`, {
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
      .then((data) => {
        console.log('data', data)
        return fetch(`${config.API_ENDPOINT}/message-board/${data.id}/latest-comment`, {
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
          .then(com => {
            return {
              message: data,
              comment: com
            }
          }) 
      })
      .then(comres => {
        console.log('comres', comres)
        return comres
      })
  },

  getLatestComment(messageId) {
    return fetch(`${config.API_ENDPOINT}/message-board/${messageId}/latest-comment`, {
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