import './App.css';
// import From from './Components/From';
import UserList from './Components/UserList';
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice';
import Login from './Components/Login';


function App() {
  const user = useSelector(selectUser)
  console.log(user)
  console.log('eve.holt@reqres.in');
  console.log('cityslicka');
  return (
    <>
      {
      user ? <UserList /> : <Login /> } 
    </>
  );
}

export default App;
