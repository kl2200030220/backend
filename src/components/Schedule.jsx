import { useState } from 'react';

function Schedule() {
  const [schedule, setSchedule] = useState([
    { id: 1, student: 'Alice Smith', subject: 'Mathematics', time: '10:00 AM', date: '2024-03-20', students: 10 },
    { id: 2, student: 'Bob Johnson', subject: 'Physics', time: '2:00 PM', date: '2024-03-21', students: 15 },
  ]);

  const [newStudent, setNewStudent] = useState('');
  const [newSubject, setNewSubject] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newStudentsCount, setNewStudentsCount] = useState('');

  const handleAddSession = () => {
    if (newStudent && newSubject && newTime && newDate && newStudentsCount) {
      setSchedule((prevSchedule) => [
        ...prevSchedule,
        {
          id: prevSchedule.length + 1,
          student: newStudent,
          subject: newSubject,
          time: newTime,
          date: newDate,
          students: Number(newStudentsCount),
        },
      ]);

      // Reset form fields
      setNewStudent('');
      setNewSubject('');
      setNewTime('');
      setNewDate('');
      setNewStudentsCount('');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>

      {/* Form to Add New Session */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">Add New Session</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
            placeholder="Student Name"
            className="p-2 border rounded"
          />
          <select
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select Subject</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="AI">AI</option>
            <option value="ML">ML</option>
          </select>
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="number"
            value={newStudentsCount}
            onChange={(e) => setNewStudentsCount(e.target.value)}
            placeholder="No. of Students"
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={handleAddSession}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Add Session
        </button>
      </div>

      {/* Display Scheduled Sessions */}
      <div className="space-y-4">
        {schedule.map((session) => (
          <div key={session.id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{session.student}</p>
                <p className="text-gray-600">{session.subject}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{session.time}</p>
                <p className="text-gray-600">{session.date}</p>
                <p className="text-gray-600">Students: {session.students}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
