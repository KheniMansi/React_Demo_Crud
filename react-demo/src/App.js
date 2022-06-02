import './App.css';
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice';
import From from './Components/From';
import EditUser from './Components/EditUser';
import Login from './Components/Login';
import UserList from './Components/UserList';
import Home from './Components/Home';
import { useNavigate , Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser)
  console.log('eve.holt@reqres.in');
  console.log('cityslicka');
  const navigate = useNavigate();
  useEffect(()=>{
    if(user) {
      navigate('/user')
    } else {
      navigate('/login');
    }
  }, [user])
  
  return (
    <>
      <Routes>
        {/* {
          user ?
            <> */}
              <Route path="/login" element={<Login />}></Route>
              <Route path="/user" element={<UserList />}></Route>
              <Route path="/user/set" element={<From />}></Route>
              <Route path="/user/edit/:id" element={<EditUser />}></Route>
              {/* <Route path="/user/set/:id" element={<From />}></Route> */}
            {/* </> :
            <>
            </>
       } */}
       <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
