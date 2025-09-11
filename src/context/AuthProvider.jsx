import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const { employees, admin, loggedInUser } = getLocalStorage()
    // localStorage.setItem("employees",JSON.stringify(employees))
    setUserData({ employees, admin, loggedInUser })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
