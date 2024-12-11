import { useState } from 'react';

function MessageCenter() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'Alice Smith', content: 'Hello, I have a question about the next lesson.', time: '10:30 AM' },
    { id: 2, from: 'Johnson', content: 'Can we reschedule tomorrow\'s session?', time: '11:45 AM' },
    { id: 3, from: 'Bob', content: 'Can we reschedule tomorrow\'s session?', time: '12:45 AM' },
    { id: 4, from: 'David', content: 'Is there any classes tomorrow?', time: '18:45 PM' },
  ]);

  const [reply, setReply] = useState('');
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  const handleReply = (e) => {
    e.preventDefault();
    if (reply.trim() && selectedMessageId !== null) {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === selectedMessageId
            ? {
                ...message,
                replies: [
                  ...(message.replies || []),
                  {
                    content: reply,
                    from: 'You',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  },
                ],
              }
            : message
        )
      );
      setReply('');
      setSelectedMessageId(null);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <div className="space-y-4 h-96 overflow-y-auto mb-4">
        {messages.map((message) => (
          <div key={message.id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{message.from}</p>
                <p className="text-gray-600">{message.content}</p>
                {message.replies &&
                  message.replies.map((reply, index) => (
                    <div key={index} className="ml-4 mt-2 border-l pl-2">
                      <p className="text-gray-800"><strong>{reply.from}:</strong> {reply.content}</p>
                      <span className="text-sm text-gray-500">{reply.time}</span>
                    </div>
                  ))}
              </div>
              <span className="text-sm text-gray-500">{message.time}</span>
            </div>
            <button
              className="text-blue-500 text-sm mt-2"
              onClick={() => setSelectedMessageId(message.id)}
            >
              Reply
            </button>
          </div>
        ))}
      </div>
      {selectedMessageId !== null && (
        <form onSubmit={handleReply} className="flex gap-2">
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Type your reply..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Reply
          </button>
        </form>
      )}
    </div>
  );
}

export default MessageCenter;
