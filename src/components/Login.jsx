import React from 'react'
import { useState } from 'react'
import axios from "axios";


 export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        handleApi();
    }

   const handleApi = () => {
     console.log({ email, pass })
    //  axios.post('https://reqres.in/api/login', {
    //    email: email,
    //    password: pass
    //  }).then(result => {
    //    console.log(result.data)
    //    alert('success')
    //  })
    //    .catch(error => {
    //      alert('service error')
    //      console.log(error)
    //    })

    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
   }

    return (
        <div className="auth-form-container">
            <h2> Login Form</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log in </button>
            </form>
            <button className="link-btn"  onClick={() => props.onFormSwitch('register')} >Don't have an account? Register here.</button>
        </div>
    )
}

export default Login
