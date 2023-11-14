import React, { useState } from 'react';
import axios from 'axios';


const Create = () => {
  const url = 'http://localhost:5000/'
  const [data, setData] = useState({
    name: "",
    email:"",
    age: 0
    
  })


  function handle(e) {
    const newdata = { ...data }
   
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }

  function submit(e) {
    e.preventDefault()
    axios   
      .post(url, {  //axios post method used for adding new data
        name: data.name,
        email: data.email,
        age: data.age
      })
      .then(res=>{  // ".then" returns a promise
        console.log(res)
      })
      .catch(error => {
        console.error('Error:', error);  // ".catch" method for error handling
      });
  }



  return (
    <div className='container my-4'>
      <form onSubmit={(e) => submit(e)} >     
         {/* event handling method 'onSubmit={(e) => submit(e)}' e for event */}


        <div className="mb-3">
          <label className="form-label">Name</label>
          <input id='name' onChange={(e) => handle(e)} value={data.name} type="text" name="name" className="form-control" />
        </div>



        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input id='email' onChange={(e) => handle(e)} value={data.email} type="email" className="form-control" />
        </div>



        <div className="mb-3">
          <label className="form-label">Age</label>
          <input id='age' onChange={(e) => handle(e)} value={data.age} type="number" className="form-control" />
        </div>



        <button type="submit" className="btn btn-primary">Submit</button>


      </form>
    </div>
  )
}

export default Create
