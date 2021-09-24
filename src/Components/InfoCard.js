import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DatePickers3 from './Datefill';
import Contact from './Contact'
import Email from './Email'
import DisableElevation8 from './ReqAppBt';
import DisableElevation12 from './ReqAppBt2';


import Name from './Name';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InfoCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
          Help us get back to you
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* <DisableElevation/> */}
          <Name/>
          

        </Typography>
        <Typography variant="body2" component="p">
          {/* <DisableElevation1/> */}
          <Email/>

          </Typography>
        <Typography variant="body6" component="p">  
        <DatePickers3/>
          <Contact/>
        
<DisableElevation12/>
         
          <br />
         
          {}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
