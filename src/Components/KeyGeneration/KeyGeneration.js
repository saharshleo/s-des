import './KeyGeneration.css'

import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Arrow, { DIRECTION } from 'react-arrows';

import {useStyles} from '../../configKey';


const KeyGeneration = (props) => {
    const classes = useStyles();

    // Animate arrows after form submit
    useEffect(() => {
        
        let arrows = document.querySelectorAll(".arrow");
        if(arrows && arrows.length) {
            arrows.forEach(arrow => {
                arrow.style.animation = "none";
                setTimeout(() => {
                    arrow.style.animation = "";
                });
            })
        }

    }, [props.keyBitsArray]);

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
                    {props.keyBitsArray.map((value, index) => (
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
                    {props.perm10.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`p10_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P10 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P10</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.p10Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getKeyName(props.perm10[index]-1)]}`} id={`p10o_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after left shift 1 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Left Shift 1</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.ls1Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getKeyName(index)]} ${classes.margin_top}`} id={`ls1_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P8 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P8 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.perm8.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ${classes.margin_top}`} id={`p8_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P8 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P8</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.key1.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getKeyName(props.perm8[index]-1)]}`} id={`p8o_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after left shift 2 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Left Shift 2</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.ls2Output.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getKeyName(index)]} ${classes.margin_top}`} id={`ls2_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* permutation P8 positions */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>P8 Positions</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.perm8.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ${classes.margin_top}`} id={`p82_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* bits after P8 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After P8</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {props.key2.map((value, index) => (
                        <Grid key={Number(index)+1} item>
                        <div className={`${classes.bits} ${classes[getKeyName(props.perm8[index]-1)]}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>


        {/* MAKE Key --> Permutation10 ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(1)]} ${classes.arrow_path}`}
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
                className={`arrow ${classes[getArrowName(2)]} ${classes.arrow_path}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`p10o_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ls1_${value%5===1 ? value+4 : value-1}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE LS1 --> Permutation8 ARROWS */}
        {[6, 3, 7, 4, 8, 5, 10, 9].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(3)]} ${classes.arrow_path}`}
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
            className={`arrow ${classes[getArrowName(4)]} ${classes.arrow_path}`}
            from={{
                direction: DIRECTION.LEFT,
                node: () => document.getElementById(`ls1_1`),
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
                className={`arrow ${classes[getArrowName(5)]} ${classes.arrow_path}`}
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