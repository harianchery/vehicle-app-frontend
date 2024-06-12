import React, { useEffect, useState } from 'react'

import axios from 'axios'

const View = () => {
    const [vehicle, changeVehicle] = useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8081/view").then(
            (response)=>{
                changeVehicle(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
        
    return (
        <div>
           
            <div className="container">
                <div className="row">
                <h3 align="center"><b>Vehicle Details</b></h3>
                <br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"> Name</th>
                                    <th scope="col"> Reg No</th>
                                    <th scope="col"> Type</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            {
                                vehicle.map(
                                    (value,index)=>{
                                        return <tbody>
                                        <tr>
                                            <td scope="row">{value.name}</td>
                                            <td>{value.no}</td>
                                            <td>{value.type}</td>
                                            <td>{value.addr}</td>
                                        </tr>
                                        
                                    </tbody>
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View