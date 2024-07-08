import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

// Dummy user data
const user = {
  name: 'Moin Khan',
  initials: 'MK',
  avatar: 'https://via.placeholder.com/150',
  emoji: '😎'
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{user.initials}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${user.initials} ${user.emoji}`} />
        </ListItem>
        <ListItem button>
          <ListItemText primary="All" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Family" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Work" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Friends" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Saved Message" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Archive" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Calls" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="New Chat" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Setting" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Night Mode" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
