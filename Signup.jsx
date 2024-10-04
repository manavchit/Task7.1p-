import Input from "./Input"
import { useState } from "react"
import { Link } from "react-router-dom"
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './utils/firebase'
import "./Signup.css";

function Signup() {

  const [contact, setcontact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = contact
  console.log(contact)

  async function handleClick(event) {
    // event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return;
    }

    if (!displayName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createuserdocfromAuth(user, { displayName })
      console.log(user)
    }
    catch (error) {
      console.log('Error in account creation', error.message)
    }
  }

  function handlepass(event) {
    const value = event.target.value
    const name = event.target.name

    setcontact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  return (

    <div className="signup-container">
      <div className="signup-box">
        <p className="signup-title">Create a DEV@Deakin Account</p>

        <div className="input-group">
          <label className="input-label">Name*</label>
          <Input
            name='displayName'
            type='text'
            placeholder='Enter your name'
            onChange={handlepass}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Email*</label>
          <Input
            name='email'
            type='email'
            placeholder='Enter your email'
            onChange={handlepass}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password*</label>
          <Input
            name='password'
            type='password'
            placeholder='Enter your password'
            onChange={handlepass}
          />
        </div>

        <div className="input-group">
          <label className="input-label">Confirm Password*</label>
          <Input
            name='confirmPassword'
            type='password'
            placeholder='Confirm your password'
            onChange={handlepass}
          />
        </div>

        <Link to="/login" onClick={handleClick}>
          <button className="signup-btn">Create</button>
        </Link>

      </div>
    </div>
  )
}

export default Signup
