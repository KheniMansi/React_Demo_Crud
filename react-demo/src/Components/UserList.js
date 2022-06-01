import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const UserList = () => {
    const user = useSelector(selectUser);
    console.log(user)
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>User List</h2>
                        <button type="button" onClick={(e) => handleLogout(e) } >Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserList;