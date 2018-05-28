import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import FolderIcon from "@material-ui/icons/Folder";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";

const styles = {
    root: {
        flexGrow: 1,
    },
    innovadocs: {
        flex: 1,
        padding: "10px",
        fontSize: "2em"
    }
};

function Plantilla(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.innovadocs}>
                InnovaDocs
              </Typography>
              <Link to="/admin/proyectos">
                <IconButton><FolderIcon/></IconButton>
              </Link>
              <Link to="/admin/alumnos">
                <IconButton><GroupIcon/></IconButton>
              </Link>
              <Link to="/admin/asesores">
                <IconButton><PersonIcon/></IconButton>
              </Link>
            </Toolbar>
          </AppBar>
          {props.children ? props.children : null}
        </div>
    );
}

Plantilla.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Plantilla);
