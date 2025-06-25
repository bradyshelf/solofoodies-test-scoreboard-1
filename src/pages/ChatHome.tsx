
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, MessageCircle, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ChatHome = () => {
  const navigate = useNavigate();
  const { userRole } = useAuth();

  // Mock chat data - placeholder for now
  const chats = [
    {
      id: 1,
      username: '@UserInstagram',
      message: 'soy un hombre de influencia. Me encant...',
      timestamp: '1h',
      avatar: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png'
    },
    {
      id: 2,
      username: '@UserInstagram',
      message: 'soy un hombre de influencia. Me encant...',
      timestamp: '2d',
      avatar: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png'
    },
    {
      id: 3,
      username: '@UserInstagram',
      message: 'soy un hombre de influencia. Me encant...',
      timestamp: '3w',
      avatar: '/lovable-uploads/26ce4d51-7cef-481d-8b86-af6c758c3760.png'
    }
  ];

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleChatClick = (chatId: number) => {
    // Navigate to individual chat - to be implemented later
    console.log('Navigate to chat:', chatId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={handleBack}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Chats</h1>
        <div className="w-6 h-6"></div> {/* Spacer for centering */}
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search chats"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat.id)}
            className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mr-3">
              <img
                src={chat.avatar}
                alt={chat.username}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chat Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-900 text-sm">
                  {chat.username}
                </h3>
                <span className="text-xs text-gray-500">
                  {chat.timestamp}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {chat.message}
              </p>
            </div>

            {/* Delete/Archive Icon */}
            <div className="ml-3 flex-shrink-0">
              <div className="w-5 h-5 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c0 1 1 2 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation - Fixed at bottom */}
      {userRole === 'foodie' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-30">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex flex-col items-center p-2 text-gray-400"
            >
              <Search className="w-6 h-6" />
              <span className="text-xs mt-1">Explore</span>
            </button>
            <button className="flex flex-col items-center p-2 text-blue-600">
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs mt-1">Messages</span>
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex flex-col items-center p-2 text-gray-400"
            >
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHome;
