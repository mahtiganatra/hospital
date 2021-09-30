import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";

export default function DisableElevation10() {
  return (
    // <Button variant="contained" color="primary" disableElevation>
      // {/* Home */}
    // {/* </Button> */}

<Link to={process.env.PUBLIC_URL + '/Home'}>
<Button variant="contained" color="primary" disableElevation>
      Home
    </Button>

</Link>

  );
}
