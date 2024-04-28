import React, { useState } from 'react';
import  check  from '../script/Server.js';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login() {
        try {
            await check(username, password);
            setLoggedIn(true);
            navigate('/doc_home');
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div>
                <h1 className='text-sm'>Login</h1>
                <input type="text" placeholder="Username" value={username} onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                <input type="password" placeholder="Password" value={password} onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
                <button id="login" onClick={login}>Login</button>
            </div>
        </>
    )
}

export default Login





//     async function login() {

//         try {
//             await check(username, password);
//             setLoggedIn(true);
//         } catch (e) {
//             console.error(e)
//         }
//     }

//     return (
//         <>
//             <div>
//                 <h1>Login</h1>
//                 <input type="text" placeholder="Username" value={username} onChange={(event) => {
//                     setUsername(event.target.value);
//                 }}/>
//                 <input type="password" placeholder="Password" value={password} onChange={(event) => {
//                     setPassword(event.target.value);
//                 }}/>
//                 <button id="login" onClick={login}>Login</button>
//             </div>
//         </>
//     )
// }

// export default Login
