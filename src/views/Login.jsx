import React, { useState } from 'react'
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({});

  const { logIn } = useAuth()

  const handleSubmit = e => {
    e.preventDefault()
    if([email, password].includes('')) {
      setAlert({
        msg: 'All fields are required.',
        error: true
      })
      return
    }
    setAlert({})
    logIn({email, password})
    setEmail('')
    setPassword('')
  }

  const { msg } = alert

  return (
    <div className="my-10">

      { msg && <Alert alert={alert} />}
      
      <form 
        className="bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit} 
      >
        <h1 className="font-black text-3xl capitalize">Log in to <span className="text-orange-600">see the activities!</span></h1>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 blck text-xl font-bold"
            htmlFor="email"
          >E-mail</label>
          <input 
            type="email" 
            id="email" 
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 blck text-xl font-bold"
            htmlFor="password"
          >Password</label>
          <input 
            type="password" 
            id="password" 
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            placeholder="Your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="bg-orange-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors"
          value="Log In" 
        />
      </form>
    </div>
  )
}

export default Login