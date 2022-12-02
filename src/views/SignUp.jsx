import { useState } from "react";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth"

const SignUp = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [alert, setAlert] = useState({});

  const { signUp } = useAuth()

  const handleSubmit = e => {
    e.preventDefault()
    if([name, lastname, email, password, repeatPassword].includes('')) {
      setAlert({
        msg: 'All fields are required.',
        error: true
      })
      return
    }
    if(age < 1 || age > 100) {
      setAlert({
        msg: 'You must add an age between 1 and 100.',
        error: true
      })
      return
    }
    if(password !== repeatPassword) {
      setAlert({
        msg: 'Passwords are not the same.',
        error: true
      })
      return
    } 
    if(password.length < 6) {
      setAlert({
        msg: 'Your Password is too short. Add at least 6 characters',
        error: true
      })
      return
    }
    setAlert({})
    signUp({name, lastname, age, email, password})
    setName('')
    setLastname('')
    setAge(0)
    setEmail('')
    setPassword('')
    setRepeatPassword('')
  }

  const { msg } = alert

  return (
    <div className="my-10">

      { msg && <Alert alert={alert} />}
      
      <form 
        className="bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit} >
        <h1 className="font-black text-3xl capitalize">Sign up and Log in to <span className="text-orange-600">see the activities!</span></h1>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 blck text-xl font-bold"
            htmlFor="name"
          >Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 blck text-xl font-bold"
            htmlFor="lastname"
          >Lastname</label>
          <input 
            type="text" 
            id="lastname" 
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            placeholder="Your lastname"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 blck text-xl font-bold"
            htmlFor="age"
          >Age</label>
          <input 
            type="number" 
            id="age" 
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
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
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 blck text-xl font-bold"
            htmlFor="repeat-password"
          >Repeat Password</label>
          <input 
            type="password" 
            id="repeat-password" 
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="bg-orange-700 w-full mb-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-800 transition-colors"
          value="Sign Up" 
        />
      </form>
    </div>
  )
}

export default SignUp