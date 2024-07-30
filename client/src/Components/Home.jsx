import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Model from './Model'
import { Link } from 'react-router-dom'

const Home = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users').then((res) => {
      setUsers(res.data.user)
    }).catch((err) => {
      console.log(err)
    }
    )
  }, [users])

  const handleDelete= (id) => {
    axios.delete(`http://localhost:3000/users/${id}`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
     alert(res.data.message)
    }).catch((err) => {
      console.log(err)
      alert("Please Login First");
    })
  }

  const signout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className='my-12'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
      <button className='btn btn-primary' onClick={()=>document.getElementById('my_modal_3').showModal()}>Create A User</button>
      <div className='space-x-3 flex '>
      <div className='form-control'>
      <input type="text" placeholder='Search' 
      className='input input-bordered w-24 md:w-auto' />
      </div>
      <Link to='/login' className='btn btn-primary'>Login</Link>
      <Link className='btn btn-primary' onClick={signout}>Signout</Link>

      </div>
    </div>
   <div className='mt-8 ' >
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className='bg-indigo-700 text-black rounded-md'>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Job Title</th>
        <th>Company</th>
        <th>Mangage User</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) => {
          return (
            <tr key={index}>
            <th>{index+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.jobTitle}</td>
              <td>{user.company}</td>
              <td className='flex gap-2'>
               <Link to={`update-user/${user._id}`}><button className='btn btn-primary'>Edit</button></Link>
                <button className='btn btn-primary' onClick={()=>handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          )
      }
      )}
    </tbody>
  </table>
</div>
    </div>
    <Model/>
    </div>
  )
}

export default Home
