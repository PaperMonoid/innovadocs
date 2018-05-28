import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, List, ListSubheader, ListItem, Card, Typography } from '@material-ui/core';
import Plantilla from "../vistas/plantilla";
import ComprobanteSesion from "../vistas/comprobante-sesion";

const estilos = {
    forma: {
        margin: "auto",
        marginTop: 100,
        width: "90%",
        padding: 30
    },
    botonDerecha: {
        float: "right"
    },
    innovatec: {
        margin: 10,
        fontSize: "2em"
    }
};

function Admin(props) {
    const { classes } = props;
    return (
        <ComprobanteSesion>
          <Plantilla>
            <Paper className={classes.forma}>
              <List
                component="nav"
                >
                <Card className={classes.innovatec}>
                  <ListItem button>
                    <Typography variant="title" color="textSecondary">
                      INNOVATEC 2018 (32 equipos, 110 participantes)
                    </Typography>
                  </ListItem>
                </Card>
                <Card className={classes.innovatec}>
                  <ListItem button>
                    <Typography variant="title" color="textSecondary">
                      INNOVATEC 2017 (28 equipos, 80 participantes)
                    </Typography>
                  </ListItem>
                </Card>
                <Card className={classes.innovatec}>
                  <ListItem button>
                    <Typography variant="title" color="textSecondary">
                      INNOVATEC 2016 (29 equipos, 76 participantes)
                    </Typography>
                  </ListItem>
                </Card>
              </List>
            </Paper>
          </Plantilla>
        </ComprobanteSesion>
    );
}


Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(estilos)(Admin);
