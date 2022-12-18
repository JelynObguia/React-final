import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function View(props) {
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                id:res.data.id,
                name:res.data.name,
                email:res.data.email,
            });
        });
    }
    return (
        <div className="card mx-auto w-50 mt-5 shadow-lg">
            <h2 className="card-header bg-primary text-white text-center">User  { inputs.id }</h2>
            <div className="row">
                <div className="card-body p-5">
                        <h4>Name</h4>
                        <p>{ inputs.name }</p>
                        <h4>Email</h4>
                        <p>{ inputs.email }</p>
                </div>
            </div>
        </div>

    )
}