import { useState,useEffect } from "react";
import http from "../http"
import { Link } from "react-router-dom";
export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }


    const deleteUser = (id) => {
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })
    }



    return (
        <div className="ms-5 ps-5">
            <h2 className="text-center mt-3">List of Users</h2>
            <div className="row m-5">
            {users.map((user,index)=>(
                <div className="card col-lg-3 m-4 bg-info">
                        <div className="card-body text-center" key={user.id}>
                            <div className="text-start"><b>User ID:</b>{++index}</div>
                            <div className="mb-3"><b>Name:</b>  <br />{user.name}</div>
                            <div><b>Email:</b>  <br />{user.email}</div>
                            <div className="text-center mt-3">
                                <Link className="btn btn-success" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + user.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{deleteUser(user.id)}}
                                    >Delete</button>
                            </div>
                        </div>
                        </div>
                    ))}
            </div>
            {/* <table className="table table-striped table-hover">
                <thead className="text-center">
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + user.id }}>View</Link>&nbsp;
                                <button type="button" className="btn btn-danger"
                                    onClick={()=>{deleteUser(user.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>

    )
}