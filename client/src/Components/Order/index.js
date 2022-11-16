import React, { useState } from "react";
// import { validateEmail } from "../../utils/helpers";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../../utils/mutations";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Contact from '../../assets/Contact-page.jpg';
import { Typography } from "@mui/material";
import Coco from "../../assets/chocolate.jpg";

// import Button from '@mui/material/Button';
// import { FormControl, RadioGroup } from '@mui/material';
// import FormLabel from '@mui/material';
// import FormControlLabel from '@mui/material';

const OrderForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    cookies: "",
    total: "",
  });
  const [orderCreated, setOrderCreated] = useState(false);

  const [createOrder, { error }] = useMutation(CREATE_ORDER);

  const { cookies, total } = formState;

  function handleChange(e) {
    // if (e.target.name === "email") {
    //   const isValid = validateEmail(e.target.value);
    //   console.log(isValid);
    //   if (!isValid) {
    //     setErrorMessage("");
    //   } else {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required`);
    } else {
      setErrorMessage("");
    }
    // console.log('errorMessage', errorMessage);

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log(formState);
    }
  }

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createOrder({
        variables: { ...formState },
      });
      console.log(data.cookies);
      console.log(data.total);
      console.log(data.email);
    } catch (e) {
      console.error(e);
    }

    setOrderCreated(true);
    console.log(orderCreated);
  };

  return (
    <div>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <form id="order-form" onSubmit={handleOrderSubmit}>
          <div className="order-form">
            <TextField
              required
              id="outlined-required"
              name="cookies"
              label="Cookie Name Required"
              defaultValue="Chocolate Chip"
              onChange={handleChange}
            />

            <TextField
              required
              id="outlined-required"
              name="total"
              label="Quantity Required"
              defaultValue="2 dozen"
              onChange={handleChange}
            />
          </div>

          <div className="order-submit">
            <Button type="submit">Place an Order</Button>
          </div>
        </form>

        {orderCreated && (
          <div className="order-confirm">
            <h2>
              Your order of {total} {cookies} cookies is processing!
            </h2>
          </div>
        )}
      </Box>
      <Typography align="center">
        <img
          src={Coco}
          width="70%"
          height="100%"
          className="order-image"
          alt="chocolate, cookie"
        ></img>
      </Typography>
      {/* <img src={Coco} width="650px" height="300px" className="order-image" alt="cookie, coffee, man at desk with computer"></img> */}
    </div>
  );
};

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
