import React, { useState } from 'react'

import axios from 'axios'


const Search = () => {
    const [vehicle, changeVehicle] = useState(
        {
            "name": ""
        }
    )
    const [result, changeResult] = useState([])
    //delete button event
    const deletevehicle=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8081/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully deleted")
                } else {
                    alert("Something went wrong")
                    
                }
            }
        ).catch()
    }
    // value fetching
    const InputHandler = (event) => {
        changeVehicle({ ...vehicle, [event.target.name]: event.target.value })
    }
    // search button event
    const readValue = () => {
        console.log(vehicle)
        axios.post("http://localhost:8081/search", vehicle).then(
            (response) => {
                changeResult(response.data)
            }
        ).catch()


    }

    return (
        <div>
          
            <h3 align="center"><b>Please enter the Owner name to Search</b></h3>
            <div className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={vehicle.name} onChange={InputHandler} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readValue}>Search</button>
                    </div>

                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Reg No</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td scope="row">{value.name}</td>
                                                    <td>{value.no}</td>
                                                    <td>{value.type}</td>
                                                    <td>{value.addr}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>{deletevehicle(value._id)}}>Delete</button></td>
                                                </tr>
                                            }
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search