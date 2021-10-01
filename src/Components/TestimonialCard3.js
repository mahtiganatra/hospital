import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tanisha from '../Assets/Tanisha.svg'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard2() {
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
          <img src={Tanisha} className="Tanisha" alt="Tanisha" />
          <Typography gutterBottom variant="h5" component="h2">
            Tanisha Mehra
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Clean, pleasant atmosphere, patient friendly staff. I celebrated Diwali Festival here. I feel like home.

            The best hospital in Mumbai !!!

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
