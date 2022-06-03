import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectUser, userData } from "../features/userSlice";

const UserList = () => {
    
    const users = useSelector(selectUser);
    // const [users, setUserData] = useState([]);
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++'+users)
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    // const getUsers = async () => {
    //     const response = await fetch("https://reqres.in/api/users");
    //     const ok = await response.json();
    //     const ok11 = ok.data;
    //     setUserData(ok11);
    // }
    useEffect(() => {
        dispatch(userData());
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>User List </h2>
                        <div className="d-flex justify-content-between">
                            <button type="button" onClick={(e) => handleLogout(e)} >Logout</button>
                            <Link to="/user/set">Add User</Link>
                        </div>
                        <table className="table table-stipe my-5">
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            {/* {user} */}
                            <tbody>
                                {
                                    console.log('---------------------------------------'+users)
                                // users.map((key, index) => {
                                //     return (
                                //     <tr>
                                //         <td>{index+1}</td>
                                //         <td>{key.first_name}</td>
                                //         <td>{key.email}</td>
                                //         <td><Link to={`/user/edit/${key.id}`}><button>Edit</button></Link></td>
                                //     </tr>
                                //     )
                                // })}
                                }
                                {/*                                     
                                    */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserList;