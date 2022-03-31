import React from 'react';
import { ChatEngine } from "react-chat-engine";

import ChatFeed from '../components/ChatFeed/ChatFeed';
import Login from '../components/Login/Login'

import './App.css'

const projectID= "e9137980-4c56-47b2-9766-b53d6e87c9dc"

const App = () => {

  if (!localStorage.getItem('username')) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
