import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const MessageList = ({ messages }) => {
  return (
    <List className="message-list">
      {messages.map((message, index) => (
        <ListItem key={index} className={`message ${message.type}`}>
          <ListItemText primary={message.sender} secondary={message.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
