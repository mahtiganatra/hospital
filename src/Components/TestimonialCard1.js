import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SamH from '../Assets/SamH.svg'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard4() {
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
        <img src={SamH} className="SamH" alt="SamH"/>
          
          <Typography gutterBottom variant="h5" component="h2">
          
          Samyukta Joshi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          I would like to thank the Lilavati Hospital for the excellent service provided during the medical check up I have had. I want to thank all concerned. I pray that this Hospital will continue to provide medical benefit to the poor.
          
          
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
