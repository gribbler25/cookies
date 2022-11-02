import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Contact from "../../assets/Contact-page.jpg";
import { Typography } from "@mui/material";

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });

      console.log(formState.name);
      console.log(formState.email);
      console.log(formState.message);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    window.location = `mailto:gribbler25@gmail.com?subject=message from ${formState.name}&body=${formState.message}`;
  };

  return (
    <div>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        {/* <div className="contact-form"> */}
        <form id="contact-form" onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Name Required"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />

          <TextField
            required
            id="outlined-required"
            name="email"
            label="Email Required"
            defaultValue={email}
            onBlur={handleChange}
          />
          {/* </div> */}

          {/* <div className="contact-message"> */}
          <TextField
            required
            name="message"
            id="outlined-multiline-static"
            label="Message Required"
            defaultValue={message}
            multiline
            rows={4}
            onBlur={handleChange}
          />
          {/* </div> */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className="contact-submit">
            <Button type="submit">Leave A Message!</Button>
          </div>
        </form>
      </Box>
      <Typography align="center">
        <img
          src={Contact}
          width="70%"
          height="100%"
          className="order-image"
          alt="coffee, cookie, laptop"
        ></img>
      </Typography>
      {/* <img src={Contact} width="650px" height="300px" className="order-image" alt="chocolate"></img> */}
    </div>
  );
};

export default ContactForm;

// function handleChange(e) {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);
//       if (!isValid) {
//         setErrorMessage("your email is invalid");
//       } else {
//         if (!e.target.value.length) {
//           setErrorMessage(`${e.target.name} is required`);
//         } else {
//           setErrorMessage("");
//         }
//         // console.log('errorMessage', errorMessage);
//       }
//     }
