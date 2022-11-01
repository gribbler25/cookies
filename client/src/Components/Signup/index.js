import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
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
};

export default Signup;

