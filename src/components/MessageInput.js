import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onSendMessage(`Sent a file: ${file.name}`);
    }
  };

  return (
    <div className="message-input">
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        placeholder="Message"
        variant="outlined"
        InputProps={{
          classes: {
            root: 'input-root',
            input: 'input-input',
          },
        }}
      />
      <input
        accept="image/*,video/*,application/*"
        style={{ display: 'none' }}
        id="file-input"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <IconButton component="span">
          <AttachFileIcon />
        </IconButton>
      </label>
      <IconButton onClick={handleSend}>
        <SendIcon />
      </IconButton>
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
};

export default MessageInput;
