import './KeyGeneration.css'

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Arrow, { DIRECTION } from 'react-arrows'


const useStyles = makeStyles((theme) => ({
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    key_bits: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '50px',
        width: '50px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    permutation_bits: {
        backgroundColor: '#1e88e5',
        height: '25px',
        width: '25px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "12px",
        marginTop: "40px",
        marginBottom: "0px", 
    },

    margin_top: {
        marginTop: "30px",
    },

    label: {
        display: "flex",
        flexGrow: '1',
        justifyContent: "flex-end",        
    }
}));

const KeyGeneration = (props) => {
    const classes = useStyles();

    return (
        <>

        <Grid container spacing={2}>
            
            <Grid item xs={12} className={classes.centered}>
                <TextField id="outlined-basic" label="Key" variant="outlined" defaultValue="10101010" />
            </Grid>
            
            {/* key bits */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Key Bits</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <Grid key={value} item>
                        <div className={classes.key_bits} id={`key_bit_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P10 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P10 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[3, 5, 2, 7, 4, 10, 1, 9, 8, 6].map((value) => (
                        <Grid key={value} item>
                        <div className={classes.permutation_bits} id={`p10_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P10 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P10</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 0, 0, 0, 0, 1, 1, 0, 0].map((value) => (
                        <Grid key={value} item>
                        <div className={classes.key_bits}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after left shift 1 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Left Shift 1</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 0, 0, 1, 1, 1, 0, 0, 0].map((value) => (
                        <Grid key={value} item>
                        <div className={`${classes.key_bits} ${classes.margin_top}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P8 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P8 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[6, 3, 7, 4, 8, 5, 10, 9].map((value) => (
                        <Grid key={value} item>
                        <div className={classes.permutation_bits}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P8 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P8</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 1, 0, 0, 1, 0, 0].map((value) => (
                        <Grid key={value} item>
                        <div className={classes.key_bits}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after left shift 2 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Left Shift 2</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 1, 0, 0, 0, 0, 0, 1, 1].map((value) => (
                        <Grid key={value} item>
                        <div className={`${classes.key_bits} ${classes.margin_top}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P8 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P8 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[6, 3, 7, 4, 8, 5, 10, 9].map((value) => (
                        <Grid key={value} item>
                        <div className={classes.permutation_bits}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P8 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P8</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 0, 0, 0, 0, 1, 1].map((value) => (
                        <Grid key={value} item>
                        <div className={classes.key_bits}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>


        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Arrow
                className='arrow'
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`key_bit_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`p10_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        </>
    );
}


export default KeyGeneration;
