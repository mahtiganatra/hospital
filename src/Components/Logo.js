import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import LilLogo from '../Assets/LilLogo.svg'

export default function DisableElevation18() {
    return (
        // <Button variant="contained" color="primary" disableElevation>
        // Request an Appointment
        // </Button>
        <Link to={process.env.PUBLIC_URL + '/Home'}>
            <Button variant="contained" color="primary"
                style={{ backgroundColor: '#ffffff' }} disableElevation>
                {/* Book an Appointment */}
                <img src={LilLogo} width="200%" height="200%"
                    className="LilLogo" alt="LilLogo" />
            </Button>
        </Link >
    );
}