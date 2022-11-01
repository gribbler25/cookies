import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


const Login = ()=>{

    const [loginFormState, setLoginFormState] = useState({email:'', password:''});
    const [loginUser, {error}] = useMutation(LOGIN_USER);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setLoginFormState({
            ...loginFormState,
            [name]: value,
        });
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            const { data } = await loginUser({
                variables: {...loginFormState}
            });
            Auth.login(data.loginUser.token);
        }catch(e){
            console.error(e);
        }
    }
    
    return(
        <main>
            <div>
            <h3>Login!</h3>
            <form onSubmit={handleFormSubmit}>
                <input
                placeholder="Email"
                name='email'
                type='email'
                id='email'
                value={loginFormState.email}
                onChange={handleChange}
                />
                <input
                placeholder='password'
                name='password'
                type='password'
                id='password'
                value={loginFormState.password}
                onChange={handleChange}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
            {error && <div>Login failed</div>}
            </div>
        </main>
    )
    };

    export default Login;
    