import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../features/userSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            email:email,
            password: password
        }));
    }
    
    return( 
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h2 className="my-5 text-center">Login</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="email" placeholder="Please enter email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value) } />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Please enter password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value) } />
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;