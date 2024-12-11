import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (userData) => {
    // Simulate API call
    setUser({
      id: '1',
      name: 'John Doe',
      email: userData.email,
      role: userData.role
    })
  }

  const signup = (userData) => {
    // Simulate API call
    setUser({
      id: '1',
      name: userData.name,
      email: userData.email,
      role: userData.role
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}