import { Box, Button, Container, Paper } from '@material-ui/core';
import { Add, Clear, Remove } from '@material-ui/icons';
import React, { useState } from 'react';
import './Score.css';

function Score() {

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    
    return (
        <Container>
            <Paper className="m-t-1">
                <Box p={2}>
                    <Box className="flex-container">
                        <Box mr={1}>
                            <Button data-testid="decrementHome" onClick={() => setHomeScore(homeScore - 1)} variant="contained" color="primary">
                                <Remove />
                            </Button>
                        </Box>
                        <Button data-testid="incrementHome" onClick={() => setHomeScore(homeScore + 1)} variant="contained" color="primary">
                            <Add />
                        </Button>
                        <Paper className="p-x-1 m-x-1 big-font" square>{homeScore}</Paper>
                        <Box className="big-font">:</Box>
                        <Paper className="p-x-1 m-x-1 big-font" square>{awayScore}</Paper>
                        <Button data-testid="incrementAway" onClick={() => setAwayScore(awayScore + 1)} variant="contained" color="primary">
                            <Add />
                        </Button>
                        <Box ml={1}>
                            <Button data-testid="decrementAway" onClick={() => setAwayScore(awayScore - 1)} variant="contained" color="primary">
                                <Remove />
                            </Button>
                        </Box>
                    </Box>
                    <Box pt={2} className="center">
                        <Button data-testid="reset" onClick={() => { setAwayScore(0); setHomeScore(0);}} variant="contained">
                            <Clear />
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}

export default Score;