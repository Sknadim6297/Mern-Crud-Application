import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Model = () => {
    const navigate=useNavigate();

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
        // console.log(data)
        axios.post('http://localhost:3000/users',data).then((res) => {
          console.log(res)
          alert('User Created Successfully')
          navigate('/');
        }).catch((err) => {
            alert('User Creation Failed')
          console.log(err)

        }
        )

    }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit}>
    <h3 className='font-bold text-lg mb-5'>Create User</h3>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
         
        </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Tittle</span>
          </label>
          <input type="text" placeholder="Ex: Developer" name='jobTitle' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company</span>
          </label>
          <input type="text" placeholder="Ex: Google" name='company' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
      {/* if there is a button in form, it will close the modal */}
      <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_3').close()}>✕</div>
    </form>
    
  </div>
</dialog>
    </div>
  )
}

export default Model
