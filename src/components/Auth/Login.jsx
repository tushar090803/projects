// import React, { useState } from 'react'

// const Login = ({ handleLogin }) => {
//   let [email, setEmail] = useState('')
//   let [password, setPassword] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     handleLogin(email, password)
//     setEmail('')
//     setPassword('')
//   }

//   return (
//     <div className="flex flex-col h-screen w-screen justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
//       {/* 🔥 Fancy Heading */}
//       <h1 className="mb-10 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 drop-shadow-[0_5px_15px_rgba(0,255,150,0.7)] tracking-wide animate-pulse">
//         Employee Management System
//       </h1>

//       {/* 🔥 Glassmorphism Form Card */}
//       <div className="w-[90%] max-w-md rounded-3xl border border-emerald-500/40 bg-white/10 backdrop-blur-lg p-10 shadow-[0_8px_40px_rgba(0,255,150,0.4)] hover:shadow-[0_8px_50px_rgba(0,255,150,0.7)] transition">
//         <form onSubmit={submitHandler} className="flex flex-col">
//           <input
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-4 text-white outline-none bg-transparent placeholder:text-gray-400 border border-emerald-500/60 py-4 px-6 rounded-full focus:ring-2 focus:ring-emerald-400 focus:shadow-[0_0_20px_rgba(0,255,150,0.8)] transition"
//             type="email"
//             placeholder="Enter your E-mail"
//           />
//           <input
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-6 text-white outline-none bg-transparent placeholder:text-gray-400 border border-emerald-500/60 py-4 px-6 rounded-full focus:ring-2 focus:ring-emerald-400 focus:shadow-[0_0_20px_rgba(0,255,150,0.8)] transition"
//             type="password"
//             placeholder="Enter your password"
//           />
//           <button className="w-full py-3 text-lg font-semibold text-white rounded-full border border-emerald-500 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 shadow-[0_0_15px_rgba(0,255,150,0.8)] hover:shadow-[0_0_25px_rgba(0,255,150,1)] transition">
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      {/* 🔥 Fancy Heading */}
      <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 drop-shadow-[0_5px_15px_rgba(0,255,150,0.7)] tracking-wide animate-pulse text-center">
        Employee Management System...
      </h1>

      {/* 🔥 Glassmorphism Form Card */}
      <div className="w-full max-w-md rounded-3xl border border-emerald-500/40 bg-white/10 backdrop-blur-lg p-6 sm:p-8 md:p-10 shadow-[0_8px_40px_rgba(0,255,150,0.4)] hover:shadow-[0_8px_50px_rgba(0,255,150,0.7)] transition">
        <form onSubmit={submitHandler} className="flex flex-col">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 text-white outline-none bg-transparent placeholder:text-gray-400 border border-emerald-500/60 py-3 sm:py-4 px-4 sm:px-6 rounded-full focus:ring-2 focus:ring-emerald-400 focus:shadow-[0_0_20px_rgba(0,255,150,0.8)] transition text-sm sm:text-base"
            type="email"
            placeholder="Enter your E-mail"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 text-white outline-none bg-transparent placeholder:text-gray-400 border border-emerald-500/60 py-3 sm:py-4 px-4 sm:px-6 rounded-full focus:ring-2 focus:ring-emerald-400 focus:shadow-[0_0_20px_rgba(0,255,150,0.8)] transition text-sm sm:text-base"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white rounded-full border border-emerald-500 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 shadow-[0_0_15px_rgba(0,255,150,0.8)] hover:shadow-[0_0_25px_rgba(0,255,150,1)] transition">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
