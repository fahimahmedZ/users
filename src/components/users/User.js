import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const { id } = useParams()
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  })
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
      const res = await axios.get(`http://localhost:3003/users/${id}`)
      setUser(res.data)
  }
  return (
    <div className='container'>
        <Link to="/" className='btn btn-primary mt-4'>Back to Home</Link>
        <h1 className='display-4'>User Id: {id}</h1>
        <ul className='list-group w-50'>
            <li className='list-group-item'>Name: {user.name}</li>
            <li className='list-group-item'>Name: {user.username}</li>
            <li className='list-group-item'>Name: {user.email}</li>
            <li className='list-group-item'>Name: {user.phone}</li>
            <li className='list-group-item'>Name: {user.website}</li>
        </ul>
    </div>
  )
}

export default User