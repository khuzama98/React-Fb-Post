import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = {
  avatar: {
    margin: 10,
    display: 'inline-block'
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
      <Avatar
        alt="Remy Sharp"
        src={props.src}
        className={classes.avatar}
      />
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);
