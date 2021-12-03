import './KeyGeneration.css'

import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Arrow, { DIRECTION } from 'react-arrows';

import {useStyles} from '../../config';


const KeyGeneration = (props) => {
    const classes = useStyles();
    // let data = props.data;
    console.log(props.akshat);

    // useEffect( () => {
    //     props.setAkshat(!props.akshat);
    //     console.log(props.akshat);
    // }, [props.data]);

    function getArrowName(v) {
        return "arrow_path"+v;
    }

    function getKeyName(v) {
        return "key_bits"+v;
    }

    function getPermName(v) {
        return "permutation_bits"+v;
    }

    return (
        <>

        <Grid container spacing={2}>
            
            {/* key bits */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Key Bits</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.data.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getKeyName(index)]}`} id={`key_bit_${Number(index)+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P10 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P10 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.perm.map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`p10_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P10 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P10</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 0, 0, 0, 0, 1, 1, 0, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getKeyName(index)]}`} id={`p10o_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after left shift 1 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Left Shift 1</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 0, 0, 1, 1, 1, 0, 0, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes.margin_top}`} id={`ls1_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P8 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P8 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[6, 3, 7, 4, 8, 5, 10, 9].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ${classes.margin_top}`} id={`p8_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P8 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P8</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 1, 0, 0, 1, 0, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits}`} id={`p8o_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after left shift 2 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Left Shift 2</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 1, 0, 0, 0, 0, 0, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes.margin_top}`} id={`ls2_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P8 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P8 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[6, 3, 7, 4, 8, 5, 10, 9].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ${classes.margin_top}`} id={`p82_${value}`}>{value}</div>
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
                        <div className={`${classes.bits}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>


        {/* MAKE Key --> Permutation10 ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(value)]} ${classes.arrow_path} ${props.akshat}`}
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

        {/* MAKE Permutation10 --> LS1 ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(value)]} ${classes.arrow_path}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`p10o_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ls1_${value%5==1 ? value+4 : value-1}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE LS1 --> Permutation8 ARROWS */}
        {[6, 3, 7, 4, 8, 5, 10, 9].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(value)]} ${classes.arrow_path}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`ls1_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`p8_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Permution10 --> LS2 */}
        <Arrow
            className={`arrow ${classes[getArrowName(1)]} ${classes.arrow_path}`}
            from={{
                direction: DIRECTION.LEFT,
                node: () => document.getElementById(`p10o_${1}`),
                translation: [-5, 0],
            }}
            to={{
                direction: DIRECTION.LEFT,
                node: () => document.getElementById(`ls2_${1}`),
                translation: [-5, 0],
            }}
        />

        {/* MAKE LS2 --> Permutation8 ARROWS */}
        {[6, 3, 7, 4, 8, 5, 10, 9].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(value)]} ${classes.arrow_path}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`ls2_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`p82_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        </>
    );
}


export default KeyGeneration;
