import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Welfare from '../Assets/Welfare.svg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard8() {
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
            <img src={Welfare} className="Welfare" alt="Welfare" />
            <Typography gutterBottom variant="h5" component="h2">
              Social Welfare Programs
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              10th free Orthopaedic camp was organized in November, 2009.This was the 4th consecutive camp organised at Lilavati Hospital.
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
