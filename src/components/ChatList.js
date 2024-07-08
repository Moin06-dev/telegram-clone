import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

// Enhanced dummy chat data with avatars and emojis
const dummyChats = [
  { id: 1, name: 'Alice', lastMessage: 'Hello there! 😊', avatar: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=A' },
  { id: 2, name: 'Bob', lastMessage: 'How are you? 🤔', avatar: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=B' },
  { id: 3, name: 'Charlie', lastMessage: 'Good morning! 🌞', avatar: 'https://via.placeholder.com/150/5733FF/FFFFFF?text=C' },
  { id: 4, name: 'Dave', lastMessage: 'See you soon. 👋', avatar: 'https://via.placeholder.com/150/FF33A1/FFFFFF?text=D' },
];

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Using enhanced dummy data for demonstration purposes
    setChats(dummyChats);
  }, []);

  return (
    <List className="chat-list">
      {chats.map(chat => (
        <ListItem button key={chat.id} onClick={() => onSelectChat(chat.id)}>
          <ListItemAvatar>
            <Avatar src={chat.avatar} />
          </ListItemAvatar>
          <ListItemText primary={chat.name} secondary={chat.lastMessage} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
