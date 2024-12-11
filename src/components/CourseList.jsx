import { useState } from 'react';

function CourseList() {
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, name: 'Advanced Mathematics', mentor: 'Dr. Smith', progress: 75 },
    { id: 2, name: 'Physics 101', mentor: 'Prof. Johnson', progress: 60 },
    { id: 3, name: 'Java Programming', mentor: 'Prof. Andrew', progress: 90 },
    { id: 4, name: 'Python', mentor: 'Prof. Steve', progress: 100 },
  ]);

  const [availableCourses, setAvailableCourses] = useState([
    { id: 5, name: 'Data Science', mentor: 'Dr. Williams' },
    { id: 6, name: 'Web Development', mentor: 'Prof. Brown' },
    { id: 7, name: 'Cybersecurity Basics', mentor: 'Dr. Taylor' },
    { id: 8, name: 'Artificial Intelligence', mentor: 'Dr. Miller' },
  ]);

  const handleEnroll = (course) => {
    setEnrolledCourses((prevCourses) => [
      ...prevCourses,
      { ...course, progress: 0 },
    ]);
    setAvailableCourses((prevCourses) =>
      prevCourses.filter((c) => c.id !== course.id)
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <div className="space-y-4 mb-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{course.name}</p>
                <p className="text-gray-600">Mentor: {course.mentor}</p>
              </div>
              <div className="w-32">
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 text-right mt-1">
                  {course.progress}% Complete
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
      <div className="space-y-4">
        {availableCourses.map((course) => (
          <div key={course.id} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{course.name}</p>
                <p className="text-gray-600">Mentor: {course.mentor}</p>
              </div>
              <button
                onClick={() => handleEnroll(course)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
