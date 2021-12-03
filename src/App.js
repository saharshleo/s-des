import './App.css';

import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";


import NavBar from './Components/NavBar/NavBar';
import KeyGeneration from './Components/KeyGeneration/KeyGeneration';
import {useStyles} from './config';

function App() {
    const classes = useStyles();
    const [keyBitsArray, setKeyBitsArray] = useState([1, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    const [perm, setPerm] = useState([3, 5, 2, 7, 4, 10, 1, 9, 8, 6]);
    
    const handleSubmit = () => {        
        // input validation [TODO]

        setKeyBitsArray(keyValue.split("").map((value) => (Number(value))));
        // setPerm([6, 8, 9, 1, 10, 4, 7, 2, 5, 3]);
        // console.log(keyBitsArray);

    };
    const [keyValue, setKeyValue] = useState("");
    const onTextChange = (e) => setKeyValue(e.target.value);
    
    return (
        <>
        <NavBar />

        <Container className="container">    
        <div className="text__header">
            
            <h1>Key Generation</h1>
            <Grid item xs={12} className={classes.centered}>
                <TextField id="outlined-basic" label="10-bit Key" variant="outlined" value={keyValue} onChange={onTextChange} />
                <Button className={classes.button} variant="contained" size="Large" color="primary" onClick={handleSubmit}>Submit</Button>
            </Grid>
            <KeyGeneration data={keyBitsArray} perm={perm} />
        </div>
        
        </Container>
        </>
    );
}

export default App;
