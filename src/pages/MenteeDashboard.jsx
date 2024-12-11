import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import CourseList from '../components/CourseList';
import MentorList from '../components/MentorList';
import MessageCenter from '../components/MessageCenter';
import Profile from '../components/Profile';

function MenteeDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('courses');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch mentee data here
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
                activeTab === 'courses'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
              onClick={() => setActiveTab('courses')}
            >
              My Courses
            </button>
            <button
              className={`${
                activeTab === 'mentors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
              onClick={() => setActiveTab('mentors')}
            >
              Find Mentors
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
            <button
              className={`${
                activeTab === 'profile'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === 'courses' && <CourseList />}
        {activeTab === 'mentors' && <MentorList />}
        {activeTab === 'messages' && <MessageCenter />}
        {activeTab === 'profile' && <Profile />}
      </div>
    </div>
  );
}

export default MenteeDashboard;
