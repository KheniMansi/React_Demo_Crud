import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editUser } from '../features/userSlice';

const From = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser({
            fname:fname,
            lname: lname,
            email: email
        }));
    }

    // const { id } = useParams();
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2 className="my-5 text-center mx-auto">Edit User </h2>
                        <Link to="/user"><p className="text-right">Back</p></Link>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="fname" className="form-control" value={fname} onChange={(e) => setFname(e.target.value) } placeholder="Please enter first name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="lname" className="form-control" value={lname} onChange={(e) => setLname(e.target.value) } placeholder="please enter last name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Please enter email address" required="required" />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default From;