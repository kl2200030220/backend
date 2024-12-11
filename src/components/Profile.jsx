import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

function Profile() {
  const { user } = useAuth()
  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    interests: ['Mathematics', 'Physics'],
    bio: 'Passionate about learning new things'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Update profile logic here
    alert('Profile updated successfully!')
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({...profile, bio: e.target.value})}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Interests</label>
          <input
            type="text"
            value={profile.interests.join(', ')}
            onChange={(e) => setProfile({ ...profile, interests: e.target.value.split(', ')})}
            className="w-full p-2 border rounded"
            placeholder="Enter interests separated by commas"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default Profile