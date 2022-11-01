import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
    const [signupFormState, setSignupFormState] = useState({ username:'', email:'', password:''});
    const [addUser, {error}] = useMutation(ADD_USER);

    const handleChange =(event) =>{
        const{ name, value} = event.target;

        setSignupFormState({
            ...signupFormState,
            [name]:value,
        });
    };

    //submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const {data} = await addUser({
                variables: {...signupFormState}
            });
            console.log(data)
            Auth.login(data.addUser.token);
        }catch(e){
            console.error(e)
        }
    };

    return(
        
        <main>
        <h3>Sign Up!</h3>
        <div>
            <form onSubmit={handleFormSubmit}>
                <input 
                placeholder="Username"
                name="username"
                type="username"
                id="username"
                value={signupFormState.username}
                onChange={handleChange}
                />
                <input
                placeholder="Email"
                name='email'
                type='email'
                id='email'
                value={signupFormState.email}
                onChange={handleChange}
                />
                <input
                placeholder='Password'
                name='password'
                type='password'
                id='password'
                value={signupFormState.password}
                onChange={handleChange}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
            {error && <div>Sign up failed</div>}
        </div>
        </main>
       
    );
}

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

export default { Signup, Login} ;

