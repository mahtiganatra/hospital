import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: '#3CC2C2;'
        },
    },
}));

export default function SocialM() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <IconButton aria-label="Facebook" href="https://www.facebook.com/lilavatihospitalofficial/">
                <FacebookIcon />
            </IconButton>

            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/company/lilavati-hospital/">
                <LinkedInIcon />
            </IconButton>

            <IconButton aria-label="Twitter" href="https://twitter.com/LilavatiHRC">
                <TwitterIcon />
            </IconButton>

            <IconButton aria-label="Youtube" href="https://www.youtube.com/channel/UC1neYtQvPaf0PIlNhPZWQLQ">
                <YouTubeIcon />
            </IconButton>
        </div>
    );
}