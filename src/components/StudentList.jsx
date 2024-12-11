import { useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Smith', course: 'JavaScript', mentor: 'Dr. Smith', progress: 75 },
    { id: 2, name: 'Bob Johnson', course: 'Full Stack', mentor: 'Prof. Johnson', progress: 60 },
    { id: 3, name: 'Carol Williams', course: 'AI and ML', mentor: 'Prof. Andrew', progress: 90 },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    course: '',
    mentor: '',
    progress: '',
  });

  const courses = ['JavaScript', 'Full Stack', 'AI and ML', 'Cyber Security', 'Python', 'Machine Learning'];
  const mentors = ['Dr. Smith', 'Prof. Johnson', 'Prof. Andrew', 'Prof. Steve'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    if (
      newStudent.name.trim() &&
      newStudent.course.trim() &&
      newStudent.mentor.trim() &&
      newStudent.progress.trim()
    ) {
      setStudents([
        ...students,
        {
          id: students.length + 1,
          ...newStudent,
          progress: parseInt(newStudent.progress, 10), // Ensure progress is a number
        },
      ]);
      setNewStudent({ name: '', course: '', mentor: '', progress: '' }); // Reset input fields
    } else {
      alert('Please fill in all fields before adding a student.');
    }
  };

  const handleRemoveStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Enrolled Students</h2>
      <div className="space-y-4">
        {students.map((student) => (
          <div key={student.id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-gray-600">Course: {student.course}</p>
                <p className="text-gray-600">Mentor: {student.mentor}</p>
              </div>
              <div className="w-32">
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 text-right mt-1">
                  {student.progress}% Complete
                </p>
              </div>
              <button
                onClick={() => handleRemoveStudent(student.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-medium mt-6">Add New Student</h3>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          value={newStudent.name}
          onChange={handleInputChange}
          placeholder="Student Name"
          className="w-full p-2 border rounded"
        />
        <select
          name="course"
          value={newStudent.course}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
        <select
          name="mentor"
          value={newStudent.mentor}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Mentor</option>
          {mentors.map((mentor, index) => (
            <option key={index} value={mentor}>
              {mentor}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="progress"
          value={newStudent.progress}
          onChange={handleInputChange}
          placeholder="Progress (%)"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Student
        </button>
      </div>
    </div>
  );
}

export default StudentList;
