import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


const Login = (props) => {
    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setLoginFormState({
            ...loginFormState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { data } = await login({
                variables: { ...loginFormState }
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    }

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <form onSubmit={handleFormSubmit}>
                    <TextField label='Email' placeholder='Enter email' name='email' type='email' id='email' value={loginFormState.email} onChange={handleChange} fullWidth required />
                    <TextField label='Password' placeholder='Enter password' name='password' type='password' id='password' value={loginFormState.password} onChange={handleChange} fullWidth required />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                </form>
                {error ? <div>Login failed</div> : null}
            </Paper>
        </Grid>
    )
};

export default Login;
