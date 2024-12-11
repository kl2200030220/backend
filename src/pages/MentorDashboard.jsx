import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Schedule from '../components/Schedule';
import StudentList from '../components/StudentList';
import MessageCenter from '../components/MessageCenter';

function MentorDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('students');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch mentor data here
    setLoading(false); // Simulating data fetch completion
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}</h1>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`${
                activeTab === 'students'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
              onClick={() => setActiveTab('students')}
            >
              Students
            </button>
            <button
              className={`${
                activeTab === 'schedule'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
              onClick={() => setActiveTab('schedule')}
            >
              Schedule
            </button>
            <button
              className={`${
                activeTab === 'messages'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
              onClick={() => setActiveTab('messages')}
            >
              Messages
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === 'students' && <StudentList />}
        {activeTab === 'schedule' && <Schedule />}
        {activeTab === 'messages' && <MessageCenter />}
      </div>
    </div>
  );
}

export default MentorDashboard;
