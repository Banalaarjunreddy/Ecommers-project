import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const navigate=useNavigate()
    //console.log(process.env.REACT_APP_BACKEND_URL)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
    function signUp(){
        const newUser={name,email,password,mobile}
        console.log(newUser)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,newUser)
            .then((res)=>{
                console.log(res,res.data)
                if(res.status===201){
                    navigate('/login')
                }
                else if(res.status===400){
                    console.log("user already exists")
                }

            })
    }
    return (
        <div className='signup-container'>
            <div className='form-group'>
                <label>Name</label>
                <input 
                 value={name}
                 onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input 
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input 
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Mobile Number</label>
                <input 
                 value={mobile}
                 onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <button onClick={signUp}>Signup</button>
        </div>
    )
}