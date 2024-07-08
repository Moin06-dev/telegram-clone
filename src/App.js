import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import { Container, Grid } from '@mui/material';
import './index.css';

const App = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Sidebar />
        <ChatList onSelectChat={setSelectedChatId} />
        <ChatWindow chatId={selectedChatId} />
      </div>
    </div>
  );
};

export default App;
