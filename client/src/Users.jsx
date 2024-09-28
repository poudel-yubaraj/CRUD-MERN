import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Users = () => {
    // const[users, setUsers]=useState([{
    //     Name:"yubaraj", Email:"poudelyubaraj420@gmail.com",Age:20
    // }])

const [users, setUsers]=useState([])
useEffect(()=>{
    axios.get('http://localhost:5001')
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
},[])

const handleDelete = (id)=>{
    axios.delete("http://localhost:5001/deleteUser/"+id)
    .then(result=>{console.log(result)
        window.location.reload()
    })
    .catch(err=>console.log(err))
}
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-80 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                        
                          return  <tr>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th>{user.age}</th>
                            <th> <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                            <button className='btn btn-danger' 
                            onClick={(e)=>handleDelete(user._id)}>Delete</button>
                             </th>
                        </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Users
