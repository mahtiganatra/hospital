import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Advait from '../Assets/Advait.svg'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 10,
  },
});

export default function MediaCard3() {
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
            <img src={Advait} className="Advait" alt="Advait" />
            <Typography gutterBottom variant="h5" component="h2">
              Advaith Reddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It was a pleasure and an educative experience for us to visit the Lilavati Hospital. I am sure, Lilavati Hospital can benchmark internationally with the best Hospitals in the world, which is something that as an Indian, one feels proud of.
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
