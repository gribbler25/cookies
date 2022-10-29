import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Contact from '../../assets/Contact-page.jpg';
import Coco from '../../assets/chocolate.jpg';

// import Button from '@mui/material/Button';
// import { FormControl, RadioGroup } from '@mui/material';
// import FormLabel from '@mui/material';
// import FormControlLabel from '@mui/material';


const OrderForm = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                    setErrorMessage('');
                }
                // console.log('errorMessage', errorMessage);
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div>
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
        >
            <div className="order-form">

                <TextField
                    required
                    id="outlined-required"
                    label="Required"

                    defaultValue="Cookies"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Required"

                    defaultValue="Quantity"
                />
            </div>

              {/* use select from mui it looks like a drop down at bottom of file*/}

            {/* <FormControl>

            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </FormControl> */}



            <div className="order-submit">
            <Button onClick="submit">Place an Order</Button>

            </div>
            {/* <h1 data-testid="h1tag">Contact Us</h1>
            <form id="contact-form" className="contact-form"onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                {/* </div> */}
            {/* {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                </div>
                <button type="submit">Submit</button>
            </form> */}
        </Box>

        <img src={Coco} width="650px" height="300px" className="order-image" alt="cookie, coffee, man at desk with computer"></img>

        </div>
    )
}


export default OrderForm;

// select from mui is like a dropdown https://mui.com/material-ui/react-select/ 

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

