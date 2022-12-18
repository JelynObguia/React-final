import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from '../http'

export default function Create() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.post('/users',inputs).then((res)=>{
            navigate('/');
        })
    }
    return (
        <div className="card w-50 mt-5 shadow-lg mx-auto">
            <h2 className="card-header text-center bg-primary text-white">New User</h2>
            <div className="card-body">
                
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />

                        <label>Password</label>
                        <input type="password" name="password" className="form-control mb-2"
                            value={inputs.password || ''}
                            onChange={handleChange}
                             />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
            </div>
        </div>

    )
}