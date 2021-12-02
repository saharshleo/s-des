import './NavBar.css'

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Elevation
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


const NavBar = (props) => {

    return (
        <Grid item xs={12}>
            <div id="nav_header">
                <ElevationScroll {...props}>
                    <AppBar 
                    id="nav_header"
                    >
                        
                        <Container>
                            <Toolbar>
                                
                            <div className="nav_home">
                                S-DES
                            </div>
                            </Toolbar>
                        
                        </Container>

                    </AppBar>
                </ElevationScroll>
            </div>
        </Grid>
    );
}


export default NavBar;
