import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard6() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Swastha Bachpan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Children are the future of the nation. They are the next scientists, doctors, engineers, pilots and hence it is essential to ensure they are healthy in their crucial growing years.
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
  );
}
