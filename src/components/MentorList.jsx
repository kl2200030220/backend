import { useState } from 'react';

function MentorList() {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: 'Dr. Smith',
      subjects: ['Applied Physics', 'Quantum Computing'],
      rating: 4.8,
      availability: 'Mon, Wed, Fri',
    },
    {
      id: 2,
      name: 'Prof. Johnson',
      subjects: ['Data Science', 'AI'],
      rating: 4.9,
      availability: 'Tue, Thu',
    },
    {
      id: 3,
      name: 'Prof. Andrew',
      subjects: ['Java', 'FullStack'],
      rating: 4.9,
      availability: 'Sat, Thu',
    },
    {
      id: 4,
      name: 'Prof. Steve',
      subjects: ['Engineering Chemistry', 'Machine Learning'],
      rating: 4.6,
      availability: 'Tue, Thu, Wed',
    },
  ]);

  const [requestedMentors, setRequestedMentors] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRequestSession = (mentorId, mentorName) => {
    setRequestedMentors((prev) => [...prev, mentorId]);
    setConfirmationMessage(`Your request has been sent to ${mentorName}. You will receive an email soon.`);
    setTimeout(() => setConfirmationMessage(''), 5000); // Clear message after 5 seconds
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Available Mentors</h2>
      {confirmationMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
          {confirmationMessage}
        </div>
      )}
      <div className="space-y-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="border-b pb-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{mentor.name}</h3>
                <p className="text-gray-600">
                  Subjects: {mentor.subjects.join(', ')}
                </p>
                <p className="text-gray-600">Available: {mentor.availability}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{mentor.rating}</span>
                </div>
              </div>
              <button
                className={`px-4 py-2 rounded ${
                  requestedMentors.includes(mentor.id)
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                onClick={() => handleRequestSession(mentor.id, mentor.name)}
                disabled={requestedMentors.includes(mentor.id)}
              >
                {requestedMentors.includes(mentor.id) ? 'Requested' : 'Request Session'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorList;
