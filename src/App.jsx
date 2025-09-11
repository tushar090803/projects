import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  console.log('strt')

  const authData = useContext(AuthContext)
  const [data, setData] = useState(null)
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState("") // ✅ persist email
  const [password, setPassword] = useState("")

  const handleLogin = (email, password) => {
    if (!authData) return;

    setEmail(email)
    setPassword(password)

    for (let i = 0; i < authData.admin.length; i++) {
      if (authData.admin[i].email === email && authData.admin[i].password === password) {
        setUser('admin')
        setData(authData.admin[i])
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }))
        return
      }
    }

    for (let i = 0; i < authData.employees.length; i++) {
      if (authData.employees[i].email === email && authData.employees[i].password === password) {
        setData(authData.employees[i])
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email }))
        return
      }
    }

    alert("Invalid Credentials")
  }

  useEffect(() => {
    if (authData) {
      const stored = localStorage.getItem('loggedInUser');
      if (stored) {
        const loggedInUser = JSON.parse(stored);

        setUser(loggedInUser.role);
        setEmail(loggedInUser.email || "");

        if (loggedInUser.role === "admin") {
          const admin = authData?.admin.find(a => a.email === loggedInUser.email);
          setData(admin);
        } else if (loggedInUser.role === "employee") {
          const emp = authData?.employees.find(e => e.email === loggedInUser.email);
          setData(emp);
        }
      }
    }
  }, [authData]);


  if (!user) {
    return <Login handleLogin={handleLogin} />
  } else if (user === 'admin') {
    return <AdminDashboard changeUser={setUser} data={data} />
  } else if (user === 'employee') {
    return <EmployeeDashboard changeUser={setUser} data={data} />
  }
}

export default App
