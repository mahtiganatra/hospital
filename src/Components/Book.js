import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";

export default function DisableElevation15() {
    return (
        // <Button variant="contained" color="primary" disableElevation>
        // Request an Appointment
        // </Button>
        <Link to={process.env.PUBLIC_URL + '/Package'}>
            <Button variant="contained" color="primary" disableElevation>
                Book an Appointment
            </Button>
        </Link >
    );
}
