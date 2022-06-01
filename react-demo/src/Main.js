// // import { Routes, Route } from "react-router-dom";
// import {
//     BrowserRouter as Router, useRoutes,
// } from "react-router-dom";
// import Login from './Components/Login';
// import UserList from './Components/UserList';
// import From from './Components/From';
// import { useSelector } from "react-redux";
// import { selectUser } from './features/userSlice';

// const LoginFun = () => {
//     // console.log(user)
//     const routes = useRoutes([
//         { path: "/", element: <Login /> },
//     ]);
//     return routes;
// }

// const App = () => {
//     let routes = useRoutes([
//         // { path: "/", element: <Login /> },
//         { path: "/user", element: <UserList /> },
//         { path: "/user/set", element: <From /> }
//     ]);
//     return routes;
// };
// const Main = () => {
//     const user = useSelector(selectUser);
//     return (
//         <Router>
//             {user ? <LoginFun /> : <App />}
//             {/* <App /> */}
//         </Router>
//     );
// };
// export default Main;
