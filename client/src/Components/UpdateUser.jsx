import axios from 'axios';
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UpdateUser = () => {
    const navigate = useNavigate();
    const user = useLoaderData();
    console.log(user);
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const email = formData.get('email')
        const jobTitle = formData.get('jobTitle')
        const company = formData.get('company')
        const data = {
            name,
            email,
            jobTitle,
            company
        }

        axios.put(`http://localhost:3000/users/${user.data.updateUser._id}`, data,
             { headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` } }).then((res) => {

            alert('User Updated Successfully')
            navigate('/');
        }
        ).catch((err) => {
            alert('User Updation Failed')
            console.log(err)
        }
        )
    }
    return (
        <div className='mt-8 max-w-md mx-auto'>
            <form method="dialog" onSubmit={handleSubmit}>
                <h3 className='font-bold text-3xl mb-5'>Update User</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        defaultValue={user.data.updateUser.name}
                        placeholder="Name" name='name' className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        defaultValue={user.data.updateUser.email} placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Tittle</span>
                    </label>
                    <input type="text"
                        defaultValue={user.data.updateUser.jobTitle}
                        placeholder="Ex: Developer" name='jobTitle' className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type="text"
                        defaultValue={user.data.updateUser.company} placeholder="Ex: Google" name='company' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser
