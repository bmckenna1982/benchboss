import React from 'react';

const MessageContext = React.createContext({
  message: {
    title: '',
    content: '',
    author: '',
    posted_date: '2020-02-10T10:24:00.000Z'

  },
  comments: [],
  addFormOpen: false,
  error: null,
  toggleCommentForm: () => { },
  addComment: () => { },
  toggleMessageForm: () => { },
  addMessage: () => { }
});

export default MessageContext;
