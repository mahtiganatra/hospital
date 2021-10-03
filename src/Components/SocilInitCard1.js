import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Sewa from '../Assets/Sewa.svg'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 10,
  },
});

export default function MediaCard5() {
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
            <img src={Sewa} className="Sewa" alt="Sewa" />
            <Typography gutterBottom variant="h5" component="h2">
              S E W A
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              SEWA the social service department of Lilavati hospital serves the health needs of all the needy people irrespective of their class, caste, religion or social background. This department seeks to bridge the gap between the needy patients and the fast evolving medical technology.
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
