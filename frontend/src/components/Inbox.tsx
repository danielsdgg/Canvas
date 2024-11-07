import React, { useState } from 'react';
import { FiSend, FiArrowLeft } from 'react-icons/fi';
import SideNav from './SideNav';

interface Message {
  id: number;
  sender: 'student' | 'lecturer';
  content: string;
  timestamp: string;
}

interface Conversation {
  id: number;
  name: string;
  messages: Message[];
}

const Inbox: React.FC = () => {
  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      name: 'Dr. Daniel',
      messages: [
        { id: 1, sender: 'lecturer', content: 'Hello, how can I help you?', timestamp: '10:00 AM' },
        { id: 2, sender: 'student', content: 'I have a question about the last assignment.', timestamp: '10:05 AM' },
      ],
    },
    {
      id: 2,
      name: 'Prof. Morgan',
      messages: [
        { id: 1, sender: 'lecturer', content: 'Let me know if you need assistance with the project.', timestamp: '9:15 AM' },
      ],
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    if (selectedConversation) {
      const updatedMessages: Message[] = [
        ...selectedConversation.messages,
        { id: Date.now(), sender: 'student' as 'student', content: newMessage, timestamp: 'Now' },
      ];
      setSelectedConversation({ ...selectedConversation, messages: updatedMessages });
      setNewMessage('');
    }
  };

  const handleBackToConversations = () => {
    setSelectedConversation(null);
  };

  React.useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 640);
    };
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <>
      <SideNav />
      <div className="flex h-screen">
        {!selectedConversation || !isMobileView ? (
          <div className="w-full md:w-1/4 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Conversations</h2>
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-3 mb-2 rounded-lg cursor-pointer ${
                  selectedConversation?.id === conversation.id ? 'bg-blue-200' : 'bg-white hover:bg-gray-200'
                }`}
              >
                <p className="font-medium">{conversation.name}</p>
                <p className="text-sm text-gray-500">
                  {conversation.messages[conversation.messages.length - 1].content.slice(0, 30)}...
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {(selectedConversation && !isMobileView) || (selectedConversation && isMobileView) ? (
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-gray-300 bg-white flex items-center space-x-4">
              {isMobileView && (
                <button onClick={handleBackToConversations} className="text-gray-600">
                  <FiArrowLeft size={24} />
                </button>
              )}
              <h3 className="text-lg font-semibold">{selectedConversation?.name}</h3>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
                  >
                    <p>{message.content}</p>
                    <span className="text-xs text-gray-200">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-gray-300 flex items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleSendMessage} className="ml-2 text-blue-500 hover:text-blue-600">
                <FiSend size={24} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Inbox;
