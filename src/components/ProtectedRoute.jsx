import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ children, role }) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }

  if (user.role !== role) {
    return <Navigate to={`/${user.role}/dashboard`} />
  }

  return children
}

export default ProtectedRoute