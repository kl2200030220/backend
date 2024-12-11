function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MentorConnect
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with mentors and advance your learning journey
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Mentees</h2>
            <p className="text-gray-600 mb-4">
              Find expert mentors in your field and take your skills to the next level
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">For Mentors</h2>
            <p className="text-gray-600 mb-4">
              Share your knowledge and help others grow while building your network
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home