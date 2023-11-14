import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Read = () => {
    const [all, setAll] = useState();

    //read all data section

    //this is another method
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:5000/')
    //         .then((res) => {
    //             console.log(res)
    //             setAll(res.data)
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }, [])


    //another read all data section
    const GetallData = () => {
        axios
            .get('http://localhost:5000/')
            .then((res) => {
              
                setAll(res.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    GetallData();

    //delete a data section//another method
    // const handleDelete = async (id) => {
    //     try {
    //         const resp = await axios
    //             .delete(`http://localhost:5000/${id}`)
    //         console.log(resp.data);
    //         if (resp.ok) {
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    //delete a data section
    const handleDelete = async (id) => {
        axios
            .delete(`http://localhost:5000/${id}`)
            .then(
                GetallData()
            )
            .catch((error) => {
                console.log(error)
            })
    }


    //main section
    return (
        <>
            {/* using bootstrap */}
            <div className='container my-2'>
                <h2 className='text-center'>All Data</h2>

                {/* mapping section start */}
                {all?.map((ele, v) => {
                    return (
                        <div key={v} className='row'>
                          
                                <div key={ele._id} className='col-3'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{ele.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">{ele.age}</h6>
                                            <h6 className='card-subtitle mb-2 text-body-secondary'>{ele.email}</h6>
                                            <span style={{ cursor: "pointer" }} className="card-link" href="#" onClick={() => handleDelete(ele._id)} >Delete</span>
                                            <Link href="#" className="card-link" to={`/${ele._id}`} >Edit</Link>
                                        </div>
                                    </div>
                                </div>
                           
                        </div>
                    )
                })}
                {/* mapping section end */}

            </div>
        </>
    )
}



export default Read;
