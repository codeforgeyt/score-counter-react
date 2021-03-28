import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

function Navbar(){
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Score counter</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;