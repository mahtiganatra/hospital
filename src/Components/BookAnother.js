import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import BookAnother from '../Assets/BookAnother.svg'

export default function DisableElevation17() {
    return (
        // <Button variant="contained" color="primary" disableElevation>
        // Request an Appointment
        // </Button>
        <Link to={process.env.PUBLIC_URL + '/Package'}>
            <Button variant="contained" color="primary"
                style={{ backgroundColor: '#ffffff' }} disableElevation>
                {/* Book an Appointment */}
                <img src={BookAnother} className="BookAnother" alt="BookAnother" />
            </Button>
        </Link >
    );
}
