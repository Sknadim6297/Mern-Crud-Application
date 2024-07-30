import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        const form=e.target
        const password=form.password.value;
        const email=form.email.value;
       
        const data={
            email,
            password
        }
        axios.post('http://localhost:3000/jwt', data).then((res) => {
            console.log(res)
            localStorage.setItem('token',res.data.token)
            alert('Login Successfully')

        }).catch((err) => {
            alert('User Creation Failed')
            console.log(err)

        });
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                

                    <div className="card bg-base-100 md:w-[480px] max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                        <h1 className='font-bold text-3xl'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
