import TokenService from './token-service';
import config from '../../config';

const CommentService = {
  postComment(comment) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  getLatestComment() {
    return fetch(`${config.API_ENDPOINT}/latest-comment`, {
      headers: {

      },
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      });
  },
}

export default CommentService;