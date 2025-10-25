import React from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import { ChatMessages } from "./components/ChatMessages";
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = React.useState([
    {
      message: 'Hello',
      sender: 'user',
      id: 'id1',
    },
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2',
    },
    {
      message: "Can you get me today's date",
      sender: 'user',
      id: 'id3',
    },
    {
      message: 'Yeah sure! Today is October 18',
      sender: 'robot',
      id: 'id4',
    },
    {
      message: 'Can you tell me about MS Dhoni',
      sender: 'user',
      id: 'id5',
    },
    {
      message:
        'He is the greatest Indian wicketkeeper-batsman and also a great captain',
      sender: 'robot',
      id: 'id6',
    },
  ]);

  return (
    <div className="chat-app">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
