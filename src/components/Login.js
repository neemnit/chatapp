import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import chatContext from '../Context/ChatContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    const { setLogin, login } = useContext(chatContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
        if (email === "admin@gmail.com" && password === "admin123") {
            toast.success('🦄 Logged in Successfully', {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.setItem("login", true)
            setLogin(true)



        }
        // console.log(login,"login")

    }
    return (
        <div className='container d-flex align-items-center justify-content-center vh-100'>

            <div className="card p-3 bg-secondary-subtle" style={{ width: '26rem' }}>
                <h3>Login to Chat Application</h3>
                <form onSubmit={handleLogin}>
                    <input type='text' className='form-control' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type='password' className='form-control' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='text-center mt-4'>
                        <button className='btn btn-success pr-3 pl-3'>Login</button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login