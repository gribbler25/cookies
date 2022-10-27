import React from 'react';
import { Typography } from '@mui/material/';
import assortmentEdit from '../../assets/assortmentEdit.jpg';

function About () {
    return (
        <div className="about">
            <div>
            <Typography>
                <p>Quick Cookies started out as a simple coding project but has rapidly grown into a multi-million dollar online business.</p>
                <p>With award winning, fresh cookies delivered to your door, there's no reason not to join the club!</p>
                <p>No more wondering what to bring to the company holiday party, the neighborhood block party or your next birthday celebration!</p>
                <p>As a member, you can sign up for regularly scheduled cookie deliveries. Select your cookies, quantity, delivery window and Quick Cookies will do the rest!</p>
                <p>When there's nothing left but crumbs, don't forget to leave a review about your recent cookie box!</p>
            </Typography>
            </div>
        
            <Typography
            align="right"
            >
            <img src={assortmentEdit} width="47%" height="81%" alt=""></img>
            </Typography>
        </div>
    );
}

export default About;