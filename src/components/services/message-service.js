import TokenService from './token-service';
import config from '../../config';

const MessageService = {
  getMessageBoard() {
    return fetch(`${config.API_ENDPOINT}/message-board`, {
      headers: {
      },
      method: 'GET'
    }).then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    });
  },
  getMessage(messageId) {
    return fetch(`${config.API_ENDPOINT}/message-board/${messageId}`, {
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      method: 'GET'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        return fetch(
          `${config.API_ENDPOINT}/message-board/${data.id}/comments`,
          {
            headers: {
              Authorization: `Bearer ${TokenService.getAuthToken()}`
            },
            method: 'GET'
          }
        )
          .then(res => {
            if (!res.ok) {
              throw new Error(res.statusText);
            }
            return res.json();
          })
          .then(com => {
            return {
              message: data,
              comments: com
            };
          });
      })
      .then(comres => {
        return comres;
      });
  },

  getLatestMessage() {
    return fetch(`${config.API_ENDPOINT}/latest-message`, {
      headers: {
      },
      method: 'GET'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        data = {
          ...data,
          number_of_comments: parseInt(data.number_of_comments)
        }

        if (data.number_of_comments < 1) {
          return {
            message: data,
            comment: null
          };
        } else {
          return fetch(
            `${config.API_ENDPOINT}/message-board/${data.id}/latest-comment`,
            {
              headers: {
              },
              method: 'GET'
            }
          )
            .then(res => {
              if (!res.ok) {
                throw new Error(res.statusText);
              }
              return res.json();
            })
            .then(com => {
              return {
                message: data,
                comment: com
              };
            });
        }
      })
      .then(comres => {
        return comres;
      });
  },

  getLatestComment(messageId) {
    return fetch(
      `${config.API_ENDPOINT}/message-board/${messageId}/latest-comment`,
      {
        headers: {
        },
        method: 'GET'
      }
    ).then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    });
  },
  postMessage(message) {
    return fetch(`${config.API_ENDPOINT}/message-board`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
};

export default MessageService;
