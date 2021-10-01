import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rajiv from '../Assets/Rajiv.svg'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard1() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justifyContent="center">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <img src={Rajiv} className="Rajiv" alt="Rajiv" />
          <Typography gutterBottom variant="h5" component="h2">
            Rajiv Singh
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            My dear Shri Narendra Trivediji, This is to put on record my sincere appreciation for the very efficient care rendered to me by your staff and doctors during my recent illness at the Lilavati Hospital.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary"> */}
        {/* Share */}
        {/* </Button> */}
        {/* <Button size="small" color="primary"> */}
        {/* Learn More */}
        {/* </Button> */}
      </CardActions>
    </Card>
    </Grid>
  );
}
