import { Typography } from "@mui/material";
import React from "react";
import yum from '../../assets/yum.jpg';

function Login() {
  return (
    <div>
      
      <Typography class="login-title" mt={20} align="left" variant="h2">
        Login...
      </Typography>
      <form class="login-form">
        <div class="uk-card uk-card-default uk-card-hover uk-card-body">
          <div>
            <label for="email-login">Email:</label>
            <input type="text" id="email-login" name="e-login" />
          </div>

          <div>
            <label for="password-login">Password:</label>
            <input type="password" id="password-login" name="p-login" />
          </div>

          <div>
            <button
              class="uk-button uk-button-link uk-button-large hover-underline-animation"
              id="button-login"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {/* adding a class(typography) makes the font smaller  */}
      <Typography class="signup-title"  mt={5} align="left" variant="h2">
        Signup...
      </Typography>
      <form class="signup-form">

        {/* this is from UI kit not sure if mui does this  */}
        {/* <div class="uk-card uk-card-default uk-card-hover uk-card-body"> */}
        <div class="uk-card uk-card-default uk-card-hover uk-card-body">
          <div>
            <label for="username-signup">Username:</label>
            <input type="text" id="username-signup" name="username" />
          </div>

          <div>
            <label for="'email-signup">Email:</label>
            <input type="email" id="email-signup" name="email" />
          </div>

          <div>
            <label for="password-signup">Password:</label>
            <input type="password" id="password-signup" name="password" />
          </div>
          {/* {{!-- < button class="uk-button uk-button-link" type="submit" id="signup-btn">Signup</button> --}} */}
          <button

            class="uk-button uk-button-link hover-underline-animation"
            type="submit"
            id="signup-btn"
          >
            Signup
          </button>
        </div>
      </form>

      <Typography
            align="right"
            >
            <img src={yum} width="30%" height="70%" alt=""></img>
            </Typography>
    </div>
  );
}

export default Login;
