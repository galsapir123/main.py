import {login, logout} from "../store/userSlice"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
    const dispatch = useDispatch();
    const loggedUser = useSelector((state: any) => state.username.name);
    const loginStatus = useSelector((state: any) => state.username.isLoggedIn)
    const [username, setUsername] = useState('')
    

    const handleLogin = () => {
        username.length <= 0 ? alert('please enter username') : 
        dispatch(login(username))
    }

    const handleLogOut = () => {
        dispatch(logout())
    }


    return <>
        <h2>Login</h2>
        <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <h1>Logged User:  {loggedUser}</h1>
        <h1>login status {loginStatus ? 'logged in' : 'logged out'}</h1>

    </>



}

export default Login