import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
  
  const { id } = useParams()
  console.log(id)

//creating objects
  const [values, setValue] = useState({
    id: id,
    name: '',
    email: '',
    age: ''

  })

  //getting old data from backend
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${id}`)
      .then((res) => {
        setValue({ ...values, name: res.data.name, email: res.data.email, age: res.data.age })
      })
      .catch((err) => { console.log(err) })
  }, [id])

  //updating old data with new data
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/edit/${id}`,values)
      .then((res) => {
          navigate('/read')
      })
      .catch((err) => { console.log(err) })
  }

  return (
    <div className='container my-2' >
      <form  onSubmit={handleSubmit} >
        {/* event handling method 'onSubmit={(e) => submit(e)}' e for event */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input onChange={(e) => { setValue({ ...values, name: e.target.value }) }} value={values.name} id='name' type="text" name="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input onChange={(e) => { setValue({ ...values, email: e.target.value }) }} value={values.email} id='email' type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input onChange={(e) => { setValue({ ...values, age: e.target.value }) }} value={values.age} id='age' type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Update
