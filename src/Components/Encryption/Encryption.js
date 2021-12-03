import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Arrow, { DIRECTION } from 'react-arrows';

import {useStyles} from '../../configEnc';


const KeyGeneration = (props) => {
    const classes = useStyles();

    function getArrowName(v) {
        return "arrow_path_enc"+v;
    }

    function getPlainTextName(v) {
        return "plain_text_bits"+v;
    }

    function getPermName(v) {
        return "permutation_bits"+v;
    }

    return (
        <>

        <Grid container spacing={2}>
            
            <Grid item xs={12} className={classes.centered}>
                <TextField id="outlined-basic" label="Plain Text" variant="outlined" defaultValue="10010111" />
            </Grid>

            {/* plaintext bits */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Plaintext Bits</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 0, 1, 0, 1, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`pt_bit_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* IP for plaintext bits */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>IP</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[2, 6, 3 , 1, 4, 8, 5, 7].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`ip_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Bits after IP */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After IP</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 0, 1, 1, 1, 0, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ip_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            
            {/* ---------------------------------1st iteration---------------------------------- */}


            {/* Right half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Right Half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 1, 0, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index+4)]}`} id={`rh_enc_${index+1+4}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[4, 1, 2, 3, 2, 3, 4, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ep_enc_${value}`} >{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            

            {/* Bits after E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Bits after E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 1, 1, 0, 1, 0, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ep_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Key K1 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Key K1</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 1, 0, 0, 1, 0, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`k1_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* (Bits after E/P) XOR (Key 1) */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 0, 0, 1, 1, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ep_xor_k1_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Boxes */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Boxes</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {['S0', 'S1'].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`s_box_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Box Output*/}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Box Output</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 1, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPermName(index)]}`} id={`s_box_output_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[2, 4, 3, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`perm_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Left Half and After Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 0, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`lh_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                    {[1, 1, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_perm_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* permutation XOR with left half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR with left half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 1, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_perm_xor_lh_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Output of Fk */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Output of Fk</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 1, 0, 1, 1, 0, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`fk_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Swap */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Swap</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 1, 0, 1, 1, 0, 1, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`swap_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* ---------------------------------2nd iteration---------------------------------- */}

            
            {/* Right half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Right Half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 0, 1, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index+4)]}`} id={`rh_2_enc_${index+1+4}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[4, 1, 2, 3, 2, 3, 4, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]} ep_2_enc_${value}`} >{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            

            {/* Bits after E/P */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Bits after E/P</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 0, 1, 0, 1, 0, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ep_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Key K2 */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Key K2</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 1, 0, 0, 0, 0, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`k2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* (Bits after E/P) XOR (Key K2) */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 0, 1, 0, 1, 1, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ep_xor_k2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Boxes */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Boxes</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {['S0', 'S1'].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`s_box_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* S-Box Output*/}
            <Grid item xs={2} className={`${classes.label} text__header3`}>S-Box Output</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 1, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPermName(index)]}`} id={`s_box_output_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[2, 4, 3, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`perm_2_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Left Half and After Permutation */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After Permutation</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[1, 1, 0, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`lh_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                    {[1, 1, 1, 1].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_perm_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* permutation XOR with left half */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>XOR with left half</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 1, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_perm_xor_lh_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* Output of Fk */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>Output of Fk</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 1, 0, 1, 0, 1, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`fk_2_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>


            {/* IP inverse */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>IP inverse</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[4, 1, 3, 5, 7, 2, 8, 6].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.perm_bits} ${classes[getPermName(value-1)]}`} id={`ip_inv_enc_${value}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Bits after IP inverse */}
            <Grid item xs={2} className={`${classes.label} text__header3`}>After IP inverse</Grid>
            <Grid item xs={10}>
                <Grid container justifyContent="center" spacing={2}>
                    {[0, 0, 1, 1, 1, 0, 0, 0].map((value, index) => (
                        <Grid key={value} item>
                        <div className={`${classes.bits} ${classes[getPlainTextName(index)]}`} id={`after_ip_inv_enc_${index+1}`}>{value}</div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>


        {/* -----------------------------Arrows for 1st iteration---------------------------------- */}


        {/* MAKE Plaintext --> IP ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(1)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`pt_bit_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ip_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE After IP --> Right Half ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(2)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ip_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`rh_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Right Half --> E/P #1 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(3)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_enc_${value-4}`)[0],
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Right Half --> E/P #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(3)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_enc_${value-4}`)[1],
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After E/P --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(4)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_enc_${value}`),
                    translation: [-0.5, 0],
                }}
                to={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_xor_k1_enc_${value}`),
                    translation: [-0.5, 0],
                }}
            />

        ))}

        {/* MAKE Key K1 --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(4)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`k1_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_ep_xor_k1_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR --> S-Box ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(5)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ep_xor_k1_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_enc_${Math.ceil(value / 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box --> S-Box Output ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(6)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_enc_${Math.ceil(value / 2)}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_output_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box Output --> Permutation ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(7)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_output_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`perm_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After Permutation --> XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(8)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Left Half --> Permutation XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(8)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`lh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR with left half --> Output of Fk ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(9)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_xor_lh_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`fk_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Output of Fk --> Swap #1 ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(10)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`swap_enc_${(value + 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Output of Fk --> Swap #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(10)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`swap_enc_${(value - 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


         {/* -----------------------------Arrows for 2st iteration---------------------------------- */}


        {/* MAKE Swap --> RH ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(11)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`swap_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`rh_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Right Half --> E/P #1 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(12)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_2_enc_${value-4}`)[0],
                    translation: [0, -0.8],
                }}
            />

        ))}

        {/* MAKE Right Half --> E/P #2 ARROWS */}
        {[5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(12)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`rh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementsByClassName(`ep_2_enc_${value-4}`)[1],
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After E/P --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(13)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_2_enc_${value}`),
                    translation: [-0.5, 0],
                }}
                to={{
                    direction: DIRECTION.LEFT,
                    node: () => document.getElementById(`after_ep_xor_k2_enc_${value}`),
                    translation: [-0.5, 0],
                }}
            />

        ))}

        {/* MAKE Key K1 --> XOR ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(13)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`k2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_ep_xor_k2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR --> S-Box ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(14)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_ep_xor_k2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_2_enc_${Math.ceil(value / 4)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box --> S-Box Output ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(15)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_2_enc_${Math.ceil(value / 2)}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`s_box_output_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE S-Box Output --> Permutation ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(16)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`s_box_output_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`perm_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE After Permutation --> XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(17)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Left Half --> Permutation XOR with left half ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(17)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`lh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`after_perm_xor_lh_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE XOR with left half --> Output of Fk ARROWS */}
        {[1, 2, 3, 4].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(18)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`after_perm_xor_lh_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`fk_2_enc_${value}`),
                    translation: [0, -0.8],
                }}
            />

        ))}


        {/* MAKE Output of Fk --> IP inverse ARROWS */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <Arrow
                className={`arrow ${classes[getArrowName(19)]} ${classes.arrow_path_enc}`}
                from={{
                    direction: DIRECTION.BOTTOM,
                    node: () => document.getElementById(`fk_2_enc_${value}`),
                    translation: [0, 0.5],
                }}
                to={{
                    direction: DIRECTION.TOP,
                    node: () => document.getElementById(`ip_inv_enc_${(value)}`),
                    translation: [0, -0.8],
                }}
            />

        ))}

        

        </>
    );
}


export default KeyGeneration;
