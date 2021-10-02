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
import Save from '../Assets/Save.svg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard7() {
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
            <img src={Save} className="Save" alt="Save" />
            <Typography gutterBottom variant="h5" component="h2">
              Save & Empower Girl Child
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Doctors of Lilavati hospital feel that they need to play in protecting Girl Child from deliberate harm to ensuring her well-being, from conception to adulthood. They may as concept formers and advice givers play a major role in correcting the distorted views that parts of society have formed, and are passing on to their future generations.
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
