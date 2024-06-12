import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const[vehicle,changeVehicle]=useState([
        {
            "name":"",
            "no":"",
            "type":"",
            "addr":""
        }
    ]
)

const InputHandler=(event)=>{
    changeVehicle({...vehicle,[event.target.name]:event.target.value})
}

const read=()=>{
    console.log(vehicle)
    axios.post("http://localhost:8081/add",vehicle).then(
        (response)=>{
            console.log(response.data)

            if (response.data.status=="success") {
                alert("Added successfully")
                
            } else {
                alert("Error!")
                
            }
        }
    ).catch()

}
return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Owner name</label>
                            <input type="text" className="form-control" name='name' value={vehicle.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Registration Number</label>
                            <input type="text" className="form-control"name='no' value={vehicle.no} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Vehicle type</label>
                            <input className="form-control" name='type' value={vehicle.type}onChange={InputHandler}></input>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea type="text" className="form-control" name='addr' value={vehicle.addr} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={read}>Add New Vehicle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add